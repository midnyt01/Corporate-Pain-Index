"use client";

import { Textarea } from "@/components/ui/textarea";

import {
  useAssessment,
} from "@/context/AssessmentContext";

interface Props {
  questionId: string;
}

export default function TextAreaQuestion({
  questionId,
}: Props) {
  const { answers, setAnswer } =
    useAssessment();

  return (
    <Textarea
      placeholder="Type your answer here..."
      value={
        answers[questionId] || ""
      }
      onChange={(e) =>
        setAnswer(
          questionId,
          e.target.value
        )
      }
      className="
      min-h-[180px]

      bg-white/[0.03]

      border-white/10

      rounded-3xl

      text-white

      placeholder:text-slate-500
      "
    />
  );
}