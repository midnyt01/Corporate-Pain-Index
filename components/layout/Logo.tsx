"use client";

import { useRouter } from "next/navigation";
import NextImage from "next/image";

import LogoImage from "../../assets/logo.png";

export default function Logo() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="
        flex
        items-center

        gap-3

        cursor-pointer

        hover:opacity-90
        transition-all
        duration-200
      "
    >
      {/* Logo */}

      <div
        className="
          relative

          w-10
          h-10

          sm:w-12
          sm:h-12

          md:w-14
          md:h-14

          shrink-0
        "
      >
        <NextImage
          src={LogoImage}
          alt="Corporate Pain Index Logo"
          fill
          priority
          className="
            object-contain
            ml-4
          "
        />
      </div>

      {/* Desktop Text */}

      <span
        className="
          hidden
          sm:block

          text-base
          md:text-lg

          font-bold

          text-white

          whitespace-nowrap
        "
      >
        Corporate Pain Index
      </span>
    </button>
  );
}