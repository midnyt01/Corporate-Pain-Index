import Link from "next/link";

export default function ResultsFooter() {
  return (
    <div className="text-center">
      <p
        className="
        text-slate-400
        text-xl
        md:mt-14

        md:mb-10
        mb-7
      "
      >
        Thank you for participating.
      </p>

      <Link
        href="/"
        className="
        inline-flex

        items-center

        gap-2

        px-8
        py-4

        rounded-2xl

        border
        border-white/10

        bg-white/[0.03]

        hover:bg-white/[0.05]

        transition-all

        text-lg

        "
      >
        Take it again →
      </Link>
    </div>
  );
}