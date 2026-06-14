import GlassCard from "./GlassCard";

interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function QuestionCard({
  badge,
  title,
  subtitle,
  children,
}: Props) {
  return (
    <GlassCard
      className="
        p-5
        sm:p-7
        md:p-10
        lg:p-12
      "
    >
      {badge && (
        <div
          className="
            text-cyan-400

            uppercase

            tracking-[0.15em]
            sm:tracking-[0.2em]

            text-[10px]
            sm:text-xs

            font-medium

            mb-3
            sm:mb-4
          "
        >
          {badge}
        </div>
      )}

      <h1
        className="
          text-xl
          sm:text-2xl
          md:text-3xl
          lg:text-4xl

          font-bold

          leading-tight

          mb-4
          sm:mb-5
        "
      >
        {title}
      </h1>

      {subtitle && (
        <p
          className="
            text-slate-400

            text-sm
            sm:text-base

            leading-relaxed

            max-w-3xl

            mb-6
            sm:mb-8
            md:mb-10
          "
        >
          {subtitle}
        </p>
      )}

      <div
        className="
          w-full
        "
      >
        {children}
      </div>
    </GlassCard>
  );
}