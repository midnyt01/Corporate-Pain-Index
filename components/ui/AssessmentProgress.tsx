interface Props {
  current: number;
  total: number;
}

export default function AssessmentProgress({
  current,
  total,
}: Props) {
  const percentage = Math.round(
    (current / total) * 100
  );

  return (
    <div
      className="
      flex
      items-center

      gap-2
      sm:gap-3
      md:gap-4
      "
    >
      <span
        className="
        text-slate-400

        text-xs
        sm:text-sm

        font-medium

        min-w-[40px]
        sm:min-w-[50px]
        "
      >
        {percentage}%
      </span>

      <div
        className="
        w-[120px]
        sm:w-[180px]
        md:w-[220px]
        lg:w-[280px]

        h-[6px]
        sm:h-[7px]
        md:h-[8px]

        rounded-full

        bg-white/10

        overflow-hidden
        "
      >
        <div
          className="
          h-full

          bg-gradient-to-r

          from-violet-500

          via-fuchsia-500

          to-cyan-400

          transition-all

          duration-500
          "
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}