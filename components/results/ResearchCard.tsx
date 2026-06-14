export default function ResearchCard() {
  return (
    <div
      className="
      rounded-[28px]

      border
      border-violet-500/20

      bg-violet-500/[0.03]

      backdrop-blur-xl

      p-6
      md:p-8

      text-center
      "
    >
      <p
        className="
        text-violet-400

        uppercase

        tracking-[0.2em]

        text-xs

        font-semibold

        mb-4
        "
      >
        Help Improve This Research
      </p>

      <p
        className="
        text-slate-300

        text-sm
        md:text-base

        leading-relaxed

        max-w-2xl

        mx-auto
        "
      >
        This assessment is part of an
        ongoing effort to understand the
        biggest challenges professionals
        face at work.
      </p>

      <p
        className="
        text-slate-400

        text-sm

        mt-3

        max-w-2xl

        mx-auto
        "
      >
        Have thoughts, feedback, or want
        to discuss your experience?
      </p>

      <a
        href="mailto:bishtshivam101@gmail.com"
        className="
        inline-flex

        items-center

        justify-center

        mt-5

        text-violet-400

        hover:text-violet-300

        transition-colors

        font-medium
        "
      >
        bishtshivam101@gmail.com
      </a>
    </div>
  );
}