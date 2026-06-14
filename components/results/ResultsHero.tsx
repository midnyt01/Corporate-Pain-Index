"use client";

import { useAssessment } from "@/context/AssessmentContext";
import { bottlenecks } from "@/data/bottlenecks";

export default function ResultsHero() {
  const { answers } = useAssessment();

  const problemMap: Record<
    string,
    keyof typeof bottlenecks
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
      "meetings",

    "Meeting Scheduling":
      "scheduler",

    "Resume & LinkedIn":
      "resume",
  };

  const bottleneckKey =
    problemMap[
      answers.biggest_problem
    ] || "career";

  const bottleneck =
    bottlenecks[bottleneckKey];

  return (
    <section
      className="
      text-center

      max-w-5xl

      mx-auto

      px-4
      sm:px-6
    "
    >
      <p
        className="
        text-cyan-400

        uppercase

        tracking-[0.25em]

        text-xs

        font-semibold

        mb-4
      "
      >
        Your Report
      </p>

      <h1
        className="
        text-3xl
        sm:text-4xl
        md:text-5xl
        lg:text-6xl

        font-bold

        leading-tight

        text-white
      "
      >
        Your biggest bottleneck is
      </h1>

      <h2
        className="
        mt-2

        text-4xl
        sm:text-5xl
        md:text-6xl

        font-bold

        text-violet-400

        leading-tight
      "
      >
        {bottleneck.title}{" "}
        {bottleneck.icon}
      </h2>

      <p
        className="
        mt-5

        max-w-2xl

        mx-auto

        text-slate-400

        text-sm
        sm:text-base
        md:text-lg

        leading-relaxed
      "
      >
        You've identified your
        primary professional
        challenge. Understanding
        the problem is the first
        step toward finding the
        right solution.
      </p>
    </section>
  );
}