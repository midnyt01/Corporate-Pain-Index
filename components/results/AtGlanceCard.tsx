"use client";

import ResultCard from "./ResultCard";

import { useAssessment } from "@/context/AssessmentContext";

export default function AtAGlanceCard() {
  const { answers } = useAssessment();

  const frequency =
    getFrequencyLabel(
      answers.frequency
    );

  const frustration =
    getFrustrationLabel(
      answers.frustration
    );

  const satisfaction =
    answers.satisfaction || 0;

  const willingnessToPay =
    answers.willingness_to_pay ||
    "Not provided";

  return (
    <ResultCard>
      <h3
        className="
        text-violet-400

        text-sm

        font-semibold

        uppercase

        tracking-wide
      "
      >
        At A Glance
      </h3>

      <div
        className="
        mt-12

        space-y-5
      "
      >
        <Row
          label="How often you face it"
          value={frequency}
          color="text-cyan-400"
        />

        <Row
          label="How frustrating it is"
          value={frustration}
          color="text-pink-400"
        />

        <Row
          label="Satisfaction with current solution"
          value={`${satisfaction} / 5`}
          color="text-yellow-400"
        />

        <Row
          label="Willingness to pay"
          value={willingnessToPay}
          color="text-green-400"
        />
      </div>
    </ResultCard>
  );
}

function Row({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div
      className="
      flex

      flex-col
      sm:flex-row

      gap-2

      sm:gap-4

      sm:items-center

      sm:justify-between

      border-b
      border-white/10

      pb-4
    "
    >
      <span
        className="
        text-slate-300

        text-sm
        md:text-xl
      "
      >
        {label}
      </span>

      <span
        className={`
        ${color}

        text-sm
        md:text-xl

        font-semibold

        sm:text-right
      `}
      >
        {value}
      </span>
    </div>
  );
}

function getFrequencyLabel(
  value: number
) {
  switch (value) {
    case 1:
      return "Rarely";

    case 2:
      return "Monthly";

    case 3:
      return "Weekly";

    case 4:
      return "Several Times / Week";

    case 5:
      return "Daily";

    default:
      return "Unknown";
  }
}

function getFrustrationLabel(
  value: number
) {
  switch (value) {
    case 1:
      return "Very Low";

    case 2:
      return "Low";

    case 3:
      return "Moderate";

    case 4:
      return "High";

    case 5:
      return "Very High";

    default:
      return "Unknown";
  }
}