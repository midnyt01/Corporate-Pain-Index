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

  currentQuestionIndex: number;

  setCurrentQuestionIndex: (
    index: number
  ) => void;

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

  const [
    currentQuestionIndex,
    setCurrentQuestionIndex,
  ] = useState(0);

  const [isHydrated, setIsHydrated] =
    useState(false);

  // Load data
  useEffect(() => {
    try {
      const storedAnswers =
        localStorage.getItem(
          "assessment_answers"
        );

      const storedProgress =
        localStorage.getItem(
          "assessment_progress"
        );

      if (storedAnswers) {
        setAnswers(
          JSON.parse(storedAnswers)
        );
      }

      if (storedProgress) {
        setCurrentQuestionIndex(
          Number(storedProgress)
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

  // Save answers
  useEffect(() => {
    if (!isHydrated) return;

    localStorage.setItem(
      "assessment_answers",
      JSON.stringify(answers)
    );
  }, [answers, isHydrated]);

  // Save progress
  useEffect(() => {
    if (!isHydrated) return;

    localStorage.setItem(
      "assessment_progress",
      currentQuestionIndex.toString()
    );
  }, [
    currentQuestionIndex,
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

    setCurrentQuestionIndex(0);

    localStorage.removeItem(
      "assessment_answers"
    );

    localStorage.removeItem(
      "assessment_progress"
    );

    localStorage.removeItem(
      "results"
    );
  };

  return (
    <AssessmentContext.Provider
      value={{
        answers,

        currentQuestionIndex,
        setCurrentQuestionIndex,

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