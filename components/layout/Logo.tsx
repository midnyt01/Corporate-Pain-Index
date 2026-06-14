"use client";

import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="
      flex
      items-center
      gap-2
      sm:gap-3
      md:gap-4

      min-w-0

      cursor-pointer

      transition-all
      duration-200

      hover:opacity-90

      "
    >
      <div
        className="
        w-6
        h-6

        sm:w-7
        sm:h-7

        md:w-8
        md:h-8

        rounded-lg
        sm:rounded-xl

        shrink-0

        bg-gradient-to-br
        from-violet-400
        to-violet-600
        "
      />

      {/* Mobile */}

      <span
        className="
        block
        sm:hidden

        text-sm

        font-bold

        text-white
        "
      >
        CPI
      </span>

      {/* Desktop */}

      <span
        className="
        hidden
        sm:block

        text-base
        md:text-lg

        font-bold

        text-white

        truncate
        whitespace-nowrap
        "
      >
        Corporate Pain Index
      </span>
    </button>
  );
}