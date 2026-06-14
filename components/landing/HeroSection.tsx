"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import {
AnimatePresence,
motion,
} from "framer-motion";

import Logo from "@/components/layout/Logo";
import PrimaryButton from "@/components/ui/PrimaryButton";
import StatCard from "./StatCard";

import { useAssessment } from "@/context/AssessmentContext";

export default function HeroSection() {
const router = useRouter();

const { clearAnswers } =
useAssessment();

const [
showResumeModal,
setShowResumeModal,
] = useState(false);

const handleStartClick = () => {
const progress =
localStorage.getItem(
"assessment_progress"
);


if (
  progress &&
  Number(progress) > 0
) {
  setShowResumeModal(true);
  return;
}

router.push(
  "/assessment"
);
 

};

const continueAssessment =
() => {
router.push(
"/assessment"
);
};

const startFresh = () => {
clearAnswers();

 
localStorage.removeItem(
  "assessment_progress"
);

router.push(
  "/assessment"
);
 

};

return (
<section
className="
min-h-[100svh]

 
  flex
  flex-col

  px-4
  sm:px-6
  lg:px-8

  py-5
  "
>
  {/* Top Bar */}

  <div
    className="
    max-w-6xl
    mx-auto
    w-full
    "
  >
    <Logo />
  </div>

  {/* Hero */}

  <div
    className="
    flex-1

    flex
    items-center
    justify-center
    "
  >
    <div
      className="
      w-full

      max-w-5xl

      text-center
      "
    >
      {/* Pill */}

      <div
        className="
        inline-flex
        items-center
        gap-2

        px-3
        py-2

        rounded-full

        border
        border-cyan-400/10

        bg-white/[0.02]

        mb-8

        mt-8
        md:mt-0
        "
      >
        <div
          className="
          w-2
          h-2

          bg-cyan-400

          rounded-full

          animate-pulse
          "
        />

        <span
          className="
          text-cyan-400

          text-[10px]
          sm:text-xs

          tracking-[0.15em]

          uppercase
          "
        >
          2 Min • 13 Questions •
          100% Anonymous
        </span>
      </div>

      {/* Heading */}

      <h1
        className="
        text-3xl
        sm:text-4xl
        md:text-5xl
        lg:text-6xl

        font-bold

        leading-tight

        tracking-tight

        text-white

        mb-6
        "
      >
        What is{" "}
        <span className="gradient-text">
          secretly costing
        </span>

        <br className="hidden sm:block" />

        you the most in your

        <br className="hidden sm:block" />

        professional life?
      </h1>

      {/* Subtitle */}

      <p
        className="
        max-w-2xl

        mx-auto

        text-slate-400

        text-base
        sm:text-lg

        leading-relaxed

        mb-8
        "
      >
        Take this assessment to
        discover your biggest
        productivity, career,
        wealth, and wellness
        bottleneck.
      </p>

      {/* CTA */}

      <PrimaryButton
        onClick={
          handleStartClick
        }
        className="
          h-12
          sm:h-14

          px-6
          sm:px-8

          text-base
          sm:text-lg

          rounded-2xl

          mb-10
        "
      >
        Start Assessment

        <ArrowRight
          className="
            ml-2

            h-4
            w-4

            sm:h-5
            sm:w-5
          "
        />
      </PrimaryButton>

      {/* Stats */}

      <div
        className="
        grid

        grid-cols-1
        sm:grid-cols-3

        gap-4
        sm:gap-6

        max-w-3xl

        mx-auto
        "
      >
        <StatCard
          value="2 min"
          label="Average time"
        />

        <StatCard
          value="13"
          label="Questions"
        />

        <StatCard
          value="Anonymous"
          label="Your privacy"
        />
      </div>
    </div>
  </div>

  {/* Resume Modal */}

  <AnimatePresence>
    {showResumeModal && (
      <>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="
            fixed
            inset-0

            bg-black/60

            backdrop-blur-sm

            z-50
          "
        />

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
          }}
          transition={{
            duration: 0.2,
          }}
          className="
            fixed

            left-1/2
            top-1/2

            -translate-x-1/2
            -translate-y-1/2

            z-[60]

            w-[90%]
            max-w-md

            rounded-3xl

            border
            border-white/10

            bg-[#0B1220]

            p-8
          "
        >
          <h3
            className="
            text-xl

            font-semibold

            mb-3
            "
          >
            Resume Assessment?
          </h3>

          <p
            className="
            text-slate-400

            text-sm

            leading-relaxed

            mb-8
            "
          >
            We found a partially
            completed assessment.
            Would you like to
            continue where you
            left off or start a
            fresh assessment?
          </p>

          <div
            className="
            flex

            gap-3
            "
          >
            <button
              onClick={
                startFresh
              }
              className="
                flex-1

                h-12

                rounded-xl

                border
                border-white/10

                text-slate-300

                hover:bg-white/[0.03]

                transition-all
              "
            >
              Start Fresh
            </button>

            <button
              onClick={
                continueAssessment
              }
              className="
                flex-1

                h-12

                rounded-xl

                bg-cyan-500

                text-black

                font-medium

                hover:bg-cyan-400

                transition-all
              "
            >
              Continue
            </button>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
</section>
 

);
}
