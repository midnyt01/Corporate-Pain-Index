"use client";

import { useAssessment } from "@/context/AssessmentContext";
import ResultCard from "./ResultCard";
import { reportInsights } from "@/data/ReportInsights";

export default function NotAloneCard() {
  const { answers } = useAssessment();

  const problemMap: Record<
    string,
    keyof typeof reportInsights
  > = {
    "Career Development":
      "career",

    "Fitness & Health":
      "fitness",

    "Tax & Investment Planning":
      "tax",

    "Email Management":
      "email",

    "Meeting Notes":
      "meetingNotes",

    "Meeting Scheduling":
      "meetingScheduling",

    "Resume & LinkedIn":
      "resume",
  };

  const selectedProblem =
    answers.biggest_problem ||
    "Career Development";

  const insightKey =
    problemMap[selectedProblem] ||
    "career";

  const insight =
    reportInsights[insightKey];

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
        You Are Not Alone
      </h3>

      <div className="mt-6">
        {/* Top Stat */}

        <div
          className="
          flex
          items-center
          gap-4

          mb-5
          mt-8
        "
        >
          <div
            className="
            w-12
            h-12

            rounded-xl

            bg-violet-500/10

            flex
            items-center
            justify-center

            text-xl
          "
          >
            {insight.icon}
          </div>

          <div>
            <div
              className="
              text-4xl
              font-bold

              text-violet-400

              leading-none
            "
            >
              {insight.percentage}
            </div>

            <p
              className="
              text-xs

              text-slate-500

              uppercase

              tracking-wide
            "
            >
              Similar Professionals
            </p>
          </div>
        </div>

        {/* Headline */}

        <p
          className="
                  text-base
                    md:text-xl

          font-medium

          text-white

          leading-relaxed
        "
        >
          {insight.headline}
        </p>

        {/* Description */}

        <p
          className="
          mt-4

                  text-sm
                    md:text-lg

          text-slate-400

          leading-relaxed
        "
        >
          {insight.description}
        </p>

      </div>
    </ResultCard>
  );
}