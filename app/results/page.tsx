"use client";

import ResultsHero from "@/components/results/ResultsHero";
import PainScoreCard from "@/components/results/PainScoreCard";
import AtAGlanceCard from "@/components/results/AtGlanceCard";
import HiddenCostCard from "@/components/results/HiddenCostCard";
import SolutionSnapshotCard from "@/components/results/SolutionSnapshotCard";
import NotAloneCard from "@/components/results/NotAloneCard";
import ResultsFooter from "@/components/results/ResultsFooter";
import ResearchCard from "@/components/results/ResearchCard";



export default function ResultsPage() {

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