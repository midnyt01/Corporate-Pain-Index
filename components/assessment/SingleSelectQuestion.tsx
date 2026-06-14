"use client";

import OptionCard from "@/components/ui/OptionCard";
import { useAssessment } from "@/context/AssessmentContext";

interface Props {
  questionId: string;
  options: string[];
}

export default function SingleSelectQuestion({
  questionId,
  options,
}: Props) {
  const { answers, setAnswer } =
    useAssessment();

  const selected =
    answers[questionId];

  return (
    <div
      className="
      grid
      md:grid-cols-3
      gap-4
      "
    >
      {options.map((option) => (
        <OptionCard
          key={option}
          title={option}
          selected={selected === option}
          onClick={() =>
            setAnswer(
              questionId,
              option
            )
          }
        />
      ))}
    </div>
  );
}