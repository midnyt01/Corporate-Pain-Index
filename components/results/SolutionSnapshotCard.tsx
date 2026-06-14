"use client";

import { useAssessment } from "@/context/AssessmentContext";
import ResultCard from "./ResultCard";
import ExpandableText from "@/components/ui/ExpandableText";

export default function SolutionSnapshotCard() {
  const { answers } = useAssessment();

  const currentSolution = answers.current_solution || "Not provided";

  const satisfaction = answers.satisfaction || 0;

  const frustration = Number(answers.frustration || 0);

  const frequency = Number(answers.frequency || 0);

  let urgencyLevel = "Low";
  let urgencyColor = "text-green-400";

  const urgencyScore = frustration * 0.6 + frequency * 0.4;

  if (urgencyScore >= 4.5) {
    urgencyLevel = "Critical";
    urgencyColor = "text-red-400";
  } else if (urgencyScore >= 3.5) {
    urgencyLevel = "High";
    urgencyColor = "text-orange-400";
  } else if (urgencyScore >= 2.5) {
    urgencyLevel = "Moderate";
    urgencyColor = "text-yellow-400";
  }

  const working =
    satisfaction >= 4 ? "Yes" : satisfaction === 3 ? "Partially" : "Not really";

  return (
    <ResultCard>
      <h3
        className="
        text-violet-400
        text-sm
        uppercase
        font-semibold
        tracking-wide
      "
      >
        Your Current Solution Snapshot
      </h3>

      <div className="mt-6 space-y-5">
        <SnapshotRow
          icon="🛠️"
          label="What you're using"
          value={currentSolution}
          enableTooltip
        />

        <SnapshotRow
          icon="⭐"
          label="Satisfaction level"
          value={`${satisfaction} / 5`}
        />

        <SnapshotRow
          icon="😕"
          label="Is it working?"
          value={working}
          valueClass={
              working === "Yes"
              ? "text-green-400"
              : working === "Partially"
              ? "text-yellow-400"
              : "text-red-400"
            }
        />
            
                    <SnapshotRow
                      icon="🚨"
                      label="Urgency level"
                      value={urgencyLevel}
                      valueClass={urgencyColor}
                    />
      </div>
    </ResultCard>
  );
}

function SnapshotRow({
  icon,
  label,
  value,
  valueClass = "text-white",
  enableTooltip = false,
}: {
  icon: string;
  label: string;
  value: string;
  valueClass?: string;
  enableTooltip?: boolean;
}) {
  return (
    <div
      className="
      flex
      flex-col
      gap-3

      sm:flex-row
      sm:items-center
      sm:justify-between

      border-b
      border-white/10

      pb-4

                        text-sm
                    md:text-xl
    "
    >
      <div
        className="
        flex
        items-center
        gap-3

        min-w-0
      "
      >
        <span className="text-lg">{icon}</span>

        <span
          className="
          text-slate-300

          leading-relaxed
        "
        >
          {label}
        </span>
      </div>

{enableTooltip ? (
  <ExpandableText
    title={label}
    text={value}
  />
) : (
  <span
    className={`
      text-sm
      md:text-xl

      font-medium

      break-words

      text-left
      sm:text-right

      ${valueClass}
    `}
  >
    {value}
  </span>
)}
    </div>
  );
}
