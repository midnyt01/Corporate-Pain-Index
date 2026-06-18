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

  isAssessmentComplete: boolean;

  setAssessmentComplete: (
    value: boolean
  ) => void;

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

  const [
    isAssessmentComplete,
    setAssessmentComplete,
  ] = useState(false);

  const [isHydrated, setIsHydrated] =
    useState(false);

  // Load saved data

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

      const storedCompletion =
        localStorage.getItem(
          "assessment_complete"
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

      if (storedCompletion) {
        setAssessmentComplete(
          JSON.parse(
            storedCompletion
          )
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

  // Save completion status

  useEffect(() => {
    if (!isHydrated) return;

    localStorage.setItem(
      "assessment_complete",
      JSON.stringify(
        isAssessmentComplete
      )
    );
  }, [
    isAssessmentComplete,
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

    setAssessmentComplete(false);

    localStorage.removeItem(
      "assessment_answers"
    );

    localStorage.removeItem(
      "assessment_progress"
    );

    localStorage.removeItem(
      "assessment_complete"
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

        isAssessmentComplete,
        setAssessmentComplete,

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