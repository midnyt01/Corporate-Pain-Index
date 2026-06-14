"use client";

import { useState } from "react";
import { questions } from "@/data/question";
import { useAssessment } from "@/context/AssessmentContext";
import AssessmentLayout from "@/components/layout/AssessmentLayout";
import QuestionCard from "@/components/ui/QuestionCard";
import QuestionRenderer from "@/components/assessment/QuestionRenderer";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SavingScreen from "@/components/assessment/SavingScreen";
import { saveSurvey } from "@/services/saveSurvey";

import { buildSurveyPayload } from "@/lib/buildSurveyPayload";

import {
  saveResults,
} from "@/lib/resultsStorage";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { useRouter } from "next/navigation";

export default function AssessmentPage() {
  const router = useRouter();

  const { answers } = useAssessment();

  const [currentQuestionIndex, setCurrentQuestionIndex] =
    useState(0);

  const [showValidation, setShowValidation] =
    useState(false);

  const [isSaving, setIsSaving] =
    useState(false);

  const [showConfetti, setShowConfetti] =
    useState(false);

  const question =
    questions[currentQuestionIndex];

  const isFirstQuestion =
    currentQuestionIndex === 0;

  const isLastQuestion =
    currentQuestionIndex ===
    questions.length - 1;

  const currentAnswer =
    answers[question.id];

  const triggerValidation = () => {
    setShowValidation(true);

    setTimeout(() => {
      setShowValidation(false);
    }, 2500);
  };

  const isAnswerValid = () => {
    if (
      currentAnswer === undefined ||
      currentAnswer === null
    ) {
      return false;
    }

    if (
      typeof currentAnswer === "string" &&
      currentAnswer.trim() === ""
    ) {
      return false;
    }

    if (
      Array.isArray(currentAnswer) &&
      currentAnswer.length === 0
    ) {
      return false;
    }

    return true;
  };

const handleFinish = async () => {
  try {
    const payload =
      buildSurveyPayload(
        answers
      );

    console.log(
      "PAYLOAD",
      payload
    );
    console.log(answers)

    setIsSaving(true);

    await saveSurvey(
      payload
    );
    saveResults(payload);

    setTimeout(() => {
      setShowConfetti(true);
    }, 800);

    setTimeout(() => {
      router.push(
        "/results"
      );
    }, 2500);
  } catch (error) {
    console.error(error);

    alert(
      "Something went wrong."
    );
  }
};

  const handleNext = () => {
    if (!isAnswerValid()) {
      triggerValidation();
      return;
    }

    if (isLastQuestion) {
      handleFinish();
      return;
    }

    setCurrentQuestionIndex(
      (prev) => prev + 1
    );
  };

  const handleBack = () => {
    if (isFirstQuestion) return;

    setCurrentQuestionIndex(
      (prev) => prev - 1
    );
  };

  if (isSaving) {
    return (
      <SavingScreen
        showConfetti={showConfetti}
      />
    );
  }

  return (
    <AssessmentLayout
      currentStep={
        currentQuestionIndex + 1
      }
      totalSteps={questions.length}
    >
      {/* Validation Popup */}

      <AnimatePresence>
        {showValidation && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            className="
              fixed
              top-8
              left-1/2
              -translate-x-1/2

              z-[9999]

              rounded-2xl

              border
              border-amber-500/20

              bg-[#111827]/95

              backdrop-blur-xl

              px-6
              py-4

              shadow-xl

              text-sm
              font-medium

              text-amber-300
            "
          >
            Complete this step to continue.
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -30,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <QuestionCard
            badge={`QUESTION ${
              currentQuestionIndex + 1
            } OF ${questions.length}`}
            title={question.title}
            subtitle={question.subtitle}
          >
            <QuestionRenderer
              question={question}
            />

            <div
              className="
                mt-12
                flex
                items-center
                justify-between
              "
            >
              <button
                onClick={handleBack}
                disabled={isFirstQuestion}
                className="
                  text-slate-400
                  hover:text-white

                  disabled:opacity-30
                  disabled:cursor-not-allowed

                  transition-all
                "
              >
                ← Back
              </button>

              <PrimaryButton
                onClick={handleNext}
                className={
                  !isAnswerValid()
                    ? "opacity-40 cursor-not-allowed"
                    : ""
                }
              >
                {isLastQuestion
                  ? "Finish Assessment"
                  : "Continue"}
              </PrimaryButton>
            </div>
          </QuestionCard>
        </motion.div>
      </AnimatePresence>
    </AssessmentLayout>
  );
}