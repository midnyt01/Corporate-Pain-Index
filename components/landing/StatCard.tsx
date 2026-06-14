interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <div
      className="
      w-full
      md:w-[180px]

      h-[80px]

      rounded-[18px]

      border
      border-white/10

      bg-white/[0.04]

      backdrop-blur-xl

      shadow-[0_8px_32px_rgba(0,0,0,0.25)]

      flex
      flex-col

      justify-center
      items-center

      transition-all
      duration-300

      hover:bg-white/[0.06]
      hover:border-white/15
      "
    >
      <h3
        className="
        text-2xl
        font-bold

        gradient-text

        mb-1
        "
      >
        {value}
      </h3>

      <p className="text-slate-400 text-sm">
        {label}
      </p>
    </div>
  );
}