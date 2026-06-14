"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

type AnswerMap = Record<string, any>;

interface AssessmentContextType {
  answers: AnswerMap;

  setAnswer: (
    questionId: string,
    answer: any
  ) => void;

  clearAnswers: () => void;

  isHydrated: boolean;
}

const AssessmentContext =
  createContext<AssessmentContextType | null>(
    null
  );

export function AssessmentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [answers, setAnswers] =
    useState<AnswerMap>({});

  const [isHydrated, setIsHydrated] =
    useState(false);

  // Load saved answers
  useEffect(() => {
    try {
      const stored =
        localStorage.getItem(
          "assessment_answers"
        );

      if (stored) {
        setAnswers(
          JSON.parse(stored)
        );
      }
    } catch (error) {
      console.error(
        "Error loading assessment data:",
        error
      );
    }

    setIsHydrated(true);
  }, []);

  // Auto-save answers
  useEffect(() => {
    if (!isHydrated) return;

    localStorage.setItem(
      "assessment_answers",
      JSON.stringify(answers)
    );
  }, [
    answers,
    isHydrated,
  ]);

  const setAnswer = (
    questionId: string,
    answer: any
  ) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const clearAnswers = () => {
    setAnswers({});

    localStorage.removeItem(
      "assessment_answers"
    );

    localStorage.removeItem(
      "results"
    );
  };

  return (
    <AssessmentContext.Provider
      value={{
        answers,
        setAnswer,
        clearAnswers,
        isHydrated,
      }}
    >
      {children}
    </AssessmentContext.Provider>
  );
}

export function useAssessment() {
  const context =
    useContext(
      AssessmentContext
    );

  if (!context) {
    throw new Error(
      "useAssessment must be used inside AssessmentProvider"
    );
  }

  return context;
}