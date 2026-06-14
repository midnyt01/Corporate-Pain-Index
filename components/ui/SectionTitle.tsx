import { cn } from "@/lib/utils";

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  centered = false,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        centered && "text-center",
        className
      )}
    >
      {badge && (
        <p
          className="
          uppercase
          tracking-[0.3em]
          text-cyan-400
          text-sm
          font-semibold
          mb-3
        "
        >
          {badge}
        </p>
      )}

      <h2
        className="
        text-4xl
        md:text-5xl
        font-bold
        text-white
        mb-4
      "
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="
          text-slate-400
          text-lg
          max-w-2xl
          mx-auto
        "
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}