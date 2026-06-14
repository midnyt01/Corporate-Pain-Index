"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import Logo from "@/components/layout/Logo";
import PrimaryButton from "@/components/ui/PrimaryButton";
import StatCard from "./StatCard";

export default function HeroSection() {
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
              2 Min • 13 Questions • 100% Anonymous
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

          <Link href="/assessment">
            <PrimaryButton
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
          </Link>

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
    </section>
  );
}