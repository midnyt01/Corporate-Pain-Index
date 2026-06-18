"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAssessment } from "@/context/AssessmentContext";

import ResultsHero from "@/components/results/ResultsHero";
import PainScoreCard from "@/components/results/PainScoreCard";
import AtAGlanceCard from "@/components/results/AtGlanceCard";
import HiddenCostCard from "@/components/results/HiddenCostCard";
import SolutionSnapshotCard from "@/components/results/SolutionSnapshotCard";
import NotAloneCard from "@/components/results/NotAloneCard";
import ResultsFooter from "@/components/results/ResultsFooter";
import ResearchCard from "@/components/results/ResearchCard";

export default function ResultsPage() {
  const router = useRouter();

  const {
    isHydrated,
    isAssessmentComplete,
  } = useAssessment();

  useEffect(() => {
    if (!isHydrated) return;

    if (!isAssessmentComplete) {
      router.replace("/");
    }
  }, [
    isHydrated,
    isAssessmentComplete,
    router,
  ]);

  if (
    !isHydrated ||
    !isAssessmentComplete
  ) {
    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
        "
      >
        <div
          className="
            h-10
            w-10

            rounded-full

            border-2
            border-white/20

            border-t-cyan-400

            animate-spin
          "
        />
      </div>
    );
  }

  return (
    <main
      className="
        min-h-screen

        px-6
        py-12

        max-w-7xl
        mx-auto
      "
    >
      <ResultsHero />

      <div
        className="
          mt-8

          grid
          grid-cols-1
          lg:grid-cols-2

          gap-6
        "
      >
        <PainScoreCard />
        <AtAGlanceCard />
      </div>

      <div className="mt-6">
        <HiddenCostCard />
      </div>

      <div
        className="
          mt-6

          grid
          grid-cols-1
          lg:grid-cols-2

          gap-6
        "
      >
        <SolutionSnapshotCard />
        <NotAloneCard />
      </div>

      <div className="mt-8">
        <ResearchCard />
      </div>

      <div className="mt-8">
        <ResultsFooter />
      </div>
    </main>
  );
}