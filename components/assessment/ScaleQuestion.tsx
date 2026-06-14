"use client";

import OptionCard from "@/components/ui/OptionCard";
import { useAssessment } from "@/context/AssessmentContext";

interface Props {
  questionId: string;
}

const defaultScaleOptions = [
  {
    value: 1,
    emoji: "😌",
    label: "Barely",
  },
  {
    value: 2,
    emoji: "🙂",
    label: "A Little",
  },
  {
    value: 3,
    emoji: "😐",
    label: "Moderate",
  },
  {
    value: 4,
    emoji: "😫",
    label: "A Lot",
  },
  {
    value: 5,
    emoji: "💀",
    label: "Crushing",
  },
];

const satisfactionOptions = [
  {
    value: 1,
    emoji: "💀",
    label: "Very Dissatisfied",
  },
  {
    value: 2,
    emoji: "😫",
    label: "Dissatisfied",
  },
  {
    value: 3,
    emoji: "😐",
    label: "Neutral",
  },
  {
    value: 4,
    emoji: "🙂",
    label: "Satisfied",
  },
  {
    value: 5,
    emoji: "😌",
    label: "Very Satisfied",
  },
];

export default function ScaleQuestion({
  questionId,
}: Props) {
  const { answers, setAnswer } =
    useAssessment();

  const selected =
    answers[questionId];

  const scaleOptions =
    questionId === "satisfaction"
      ? satisfactionOptions
      : defaultScaleOptions;

  return (
    <div
      className="
      grid
      md:grid-cols-5
      gap-4
      "
    >
      {scaleOptions.map((item) => (
        <OptionCard
          key={item.value}
          title={item.label}
          icon={item.emoji}
          selected={
            selected === item.value
          }
          onClick={() =>
            setAnswer(
              questionId,
              item.value
            )
          }
        />
      ))}
    </div>
  );
}