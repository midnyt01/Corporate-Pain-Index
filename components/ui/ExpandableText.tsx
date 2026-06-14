"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  title?: string;
  text: string;
}

export default function ExpandableText({
  title = "Full Response",
  text,
}: Props) {
  const [isOpen, setIsOpen] =
    useState(false);

  return (
    <>
      <div
        className="
        flex
        items-center
        gap-2

        max-w-[280px]
      "
      >
        <span
          className="
          truncate

          text-sm
          md:text-xl

          font-medium

          text-white
        "
        >
          {text}
        </span>

        {/* Info Icon */}

        <div className="relative group">
          <button
            type="button"
            onClick={() =>
              setIsOpen(true)
            }
            className="
            flex

            items-center
            justify-center

            w-5
            h-5

            rounded-full

            border
            border-white/20

            text-[11px]

            text-slate-400

            hover:text-white

            hover:border-white/40

            transition-all
          "
          >
            i
          </button>

          {/* Desktop Hover Tooltip */}

          <div
            className="
            hidden

            md:block

            absolute

            bottom-full
            right-0

            mb-3

            opacity-0

            group-hover:opacity-100

            pointer-events-none

            transition-all

            w-80

            rounded-2xl

            border
            border-white/10

            bg-[#0B1020]

            backdrop-blur-xl

            p-4

            text-sm

            text-slate-200

            shadow-2xl

            z-50
          "
          >
            {text}
          </div>
        </div>
      </div>

      {/* Mobile Modal */}

      <AnimatePresence>
        {isOpen && (
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
              onClick={() =>
                setIsOpen(false)
              }
              className="
              fixed
              inset-0

              bg-black/60

              backdrop-blur-sm

              z-[9998]

              md:hidden
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
                y: 20,
              }}
              className="
              fixed

              left-1/2
              top-1/2

              -translate-x-1/2
              -translate-y-1/2

              w-[90vw]
              max-w-lg

              rounded-3xl

              border
              border-white/10

              bg-[#0B1020]

              backdrop-blur-xl

              p-6

              shadow-2xl

              z-[9999]

              md:hidden
            "
            >
              <div
                className="
                flex

                items-center

                justify-between

                mb-5
              "
              >
                <h3
                  className="
                  text-lg

                  font-semibold
                "
                >
                  {title}
                </h3>

                <button
                  onClick={() =>
                    setIsOpen(false)
                  }
                  className="
                  text-slate-400

                  hover:text-white
                "
                >
                  ✕
                </button>
              </div>

              <p
                className="
                text-slate-300

                leading-relaxed

                whitespace-pre-wrap
              "
              >
                {text}
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}