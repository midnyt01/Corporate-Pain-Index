"use client";

import { useRouter } from "next/navigation";

import PrimaryButton from "../ui/PrimaryButton";

export default function FinalCTA() {
  const router = useRouter();

  return (
    <section
      className="
      py-32

      px-6

      text-center
      "
    >
      <h2
        className="
        text-5xl
        font-bold

        mb-6
        "
      >
        Ready to discover your biggest
        bottleneck?
      </h2>

      <p
        className="
        text-slate-400

        mb-10
        "
      >
        It takes less than 3 minutes.
      </p>

      <PrimaryButton
        onClick={() =>
          router.push("/assessment")
        }
      >
        Start Assessment
      </PrimaryButton>
    </section>
  );
}