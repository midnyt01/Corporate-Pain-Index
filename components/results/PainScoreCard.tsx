"use client";

import { useEffect, useState } from "react";
import { Info } from "lucide-react";

import ResultCard from "./ResultCard";

import { useAssessment } from "@/context/AssessmentContext";
import { calculatePainScore } from "@/lib/CalculatePainScore";

function getPainLevel(score: number) {
  if (score <= 20) {
    return {
      label: "Very Low",
      color: "#22c55e",
    };
  }

  if (score <= 40) {
    return {
      label: "Low",
      color: "#84cc16",
    };
  }

  if (score <= 60) {
    return {
      label: "Medium",
      color: "#facc15",
    };
  }

  if (score <= 80) {
    return {
      label: "High",
      color: "#fb923c",
    };
  }

  return {
    label: "Very High",
    color: "#c084fc",
  };
}

export default function PainScoreCard() {
  const { answers } = useAssessment();

  const score =
    calculatePainScore(answers);

  const [displayScore, setDisplayScore] =
    useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 1800;

    const increment =
      score / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= score) {
        setDisplayScore(score);
        clearInterval(timer);
      } else {
        setDisplayScore(
          Math.round(start)
        );
      }
    }, 16);

    return () =>
      clearInterval(timer);
  }, [score]);

  const painLevel =
    getPainLevel(score);

  const radius = 180;

  const circumference =
    Math.PI * radius;

  const progress =
    circumference -
    (displayScore / 100) *
      circumference;

  return (
    <ResultCard>
      {/* Header */}

      <div
        className="
        flex
        items-center
        gap-2
      "
      >
        <h3
          className="
          text-violet-400
          uppercase
          tracking-wide
          text-xs
          sm:text-sm
          font-semibold
        "
        >
          Your Pain Score
        </h3>

        <div className="group relative">
          <Info
            size={16}
            className="
            text-slate-500
            cursor-pointer
          "
          />

          {/* Tooltip */}

          <div
            className="
            absolute

            top-7
            left-1/2

            -translate-x-1/2

            w-56
            sm:w-64

            max-w-[90vw]

            rounded-xl

            border
            border-white/10

            bg-[#0B1120]

            p-3

            text-xs

            text-slate-300

            shadow-xl

            opacity-0

            invisible

            group-hover:opacity-100
            group-hover:visible

            transition-all

            z-50
          "
          >
            Pain Score combines:

            <ul className="mt-2 space-y-1">
              <li>
                • Frustration (40%)
              </li>

              <li>
                • Frequency (30%)
              </li>

              <li>
                • Dissatisfaction with
                current solution (20%)
              </li>

              <li>
                • Willingness to pay
                (10%)
              </li>
            </ul>

            <p className="mt-2">
              Higher score =
              stronger problem worth
              solving.
            </p>
          </div>
        </div>
      </div>

      {/* Gauge */}

      <div
        className="
        relative

        flex

        justify-center

        mt-4

        w-full
      "
      >
        <svg
          viewBox="0 0 500 280"
          className="
            w-full
            max-w-[520px]
            h-auto
          "
        >
          <defs>
            <linearGradient
              id="painGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="#7C3AED"
              />

              <stop
                offset="100%"
                stopColor="#C084FC"
              />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur
                stdDeviation="3"
                result="blur"
              />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background Arc */}

          <path
            d="
            M 70 240
            A 180 180 0 0 1 430 240
          "
            fill="none"
            stroke="#475569"
            strokeWidth="24"
            strokeLinecap="round"
          />

          {/* Progress Arc */}

          <path
            d="
            M 70 240
            A 180 180 0 0 1 430 240
          "
            fill="none"
            stroke="url(#painGradient)"
            strokeWidth="24"
            strokeLinecap="round"
            filter="url(#glow)"
            strokeDasharray={
              circumference
            }
            strokeDashoffset={
              progress
            }
            style={{
              transition:
                "stroke-dashoffset 0.08s linear",
            }}
          />
        </svg>

        {/* Score */}

        <div
          className="
          absolute

          top-[63%]
          md:top-[64%]

          left-1/2

          -translate-x-1/2
          -translate-y-1/2

          text-center

          z-10
        "
        >
          <div
            className="
            text-4xl
            sm:text-5xl
            lg:text-6xl

            font-bold

            leading-none
          "
          >
            {displayScore}
          </div>

          <div
            className="
            text-slate-400

            text-base
            sm:text-lg
            md:text-xl

            mt-2
          "
          >
            / 100
          </div>

          <div
            className="
            mt-3

            text-lg
            sm:text-xl
            md:text-2xl

            font-semibold
          "
            style={{
              color:
                painLevel.color,
            }}
          >
            {painLevel.label}
          </div>
        </div>

        {/* Scale */}

        <div
          className="
          absolute

          bottom-[-7px]
          md:bottomm-[-5px]

          left-0
          right-0

          flex

          justify-between

          px-[13%]
          md:px-[14%]

          text-slate-400

          text-base
          sm:text-lg
          md:text-xl
        "
        >
          <span>0</span>
          <span>100</span>
        </div>
      </div>

      {/* Description */}

      <p
        className="
        text-center

        text-slate-400

        text-sm
        sm:text-[15px]

        leading-relaxed

        max-w-sm

        mx-auto

        mt-2
      "
      >
        This score shows how much
        this issue impacts your
        professional life.
      </p>
    </ResultCard>
  );
}