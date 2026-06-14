"use client";

import Confetti from "react-confetti";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  showConfetti: boolean;
}

export default function SavingScreen({
  showConfetti,
}: Props) {
  return (
    <div
      className="
      min-h-screen

      flex

      items-center

      justify-center

      px-6
      "
    >
      {showConfetti && (
        <Confetti
          recycle={false}
          numberOfPieces={250}
        />
      )}

      <div
        className="
        w-full

        max-w-2xl

        rounded-[40px]

        border
        border-white/10

        bg-white/[0.03]

        backdrop-blur-xl

        px-12
        py-8
        "
      >
        <motion.div
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
        >
          <p
            className="
            text-cyan-400

            uppercase

            tracking-[0.1em]

            mb-4
            text-xs
            "
          >
            Almost Done
          </p>

          <h1
            className="
            text-2xl

            font-bold

            mb-6
            "
          >
            Saving your results...
          </h1>

          <p
            className="
            text-slate-400

            text-lg
            "
          >
            Crunching your pain profile.
          </p>
        </motion.div>
      </div>
    </div>
  );
}