"use client";

import Image from "next/image";

import ResultCard from "./ResultCard";

import { useAssessment } from "@/context/AssessmentContext";

import { reportInsights } from "@/data/ReportInsights";

import DownImage from "@/assets/down.png";

export default function HiddenCostCard() {
  const { answers } =
    useAssessment();

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

  const data =
    reportInsights[insightKey];

  return (
    <ResultCard>
      <p
        className="
        text-violet-400

        text-sm

        uppercase

        font-semibold

        tracking-wide
      "
      >
        What This Is Costing You
      </p>

      <div
        className="
        mt-6

        grid

        grid-cols-1

        xl:grid-cols-[120px_1fr_260px]

        gap-8

        items-center
      "
      >
        {/* Icon */}

        <div
          className="
          mx-auto

          xl:mx-0

          w-24
          h-24

          md:w-28
          md:h-28

          rounded-full

          bg-violet-500/10

          border
          border-violet-500/10

          flex

          items-center

          justify-center

          text-5xl
        "
        >
          {data.icon}
        </div>

        {/* Content */}

        <div
          className="
          text-center

          xl:text-left
        "
        >
          <h3
            className="
            text-xl

            md:text-2xl

            font-bold

            leading-tight
          "
          >
            {data.hiddenCost}
          </h3>

          <p
            className="
            mt-4

            text-slate-400

            text-sm

            md:text-base

            leading-relaxed
          "
          >
            {data.focus}
          </p>

          {/* Extra Insight */}

          <div
            className="
            mt-5

            inline-flex

            items-center

            gap-2

            rounded-full

            border
            border-violet-500/15

            bg-violet-500/[0.05]

            px-4
            py-2

            text-xs

            text-violet-300
          "
          >
            Long-term impact often grows
            when this challenge remains
            unresolved.
          </div>
        </div>

        {/* Illustration */}

        <div
          className="
          flex

          justify-center

          xl:justify-end
        "
        >
          <Image
            src={DownImage}
            alt="Hidden Cost"

            priority

            className="
              w-[180px]

              md:w-[220px]

              xl:w-[260px]

              h-auto

              object-contain
            "
          />
        </div>
      </div>
    </ResultCard>
  );
}