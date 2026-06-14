import { cn } from "@/lib/utils";

interface OptionCardProps {
  title: string;
  description?: string;
  icon?: string;
  selected?: boolean;
  onClick?: () => void;
}

export default function OptionCard({
  title,
  description,
  icon,
  selected,
  onClick,
}: OptionCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        `
        w-full

        rounded-3xl

        border

        py-4
        px-6

        text-left

        transition-all

        duration-300

        backdrop-blur-xl

        hover:scale-[1.02]

        hover:border-violet-500/50

        hover:bg-white/[0.04]
        `,

        selected
          ? `
            border-violet-500
            bg-violet-500/10
            shadow-lg
            shadow-violet-500/20
          `
          : `
            border-white/10
            bg-white/[0.02]
          `
      )}
    >
      {icon && (
        <div className="text-4xl mb-3">
          {icon}
        </div>
      )}

      <h3
        className="
        text-white
        font-semibold
        text-base
        mb-1
      "
      >
        {title}
      </h3>

      {description && (
        <p
          className="
          text-slate-400
          text-sm
        "
        >
          {description}
        </p>
      )}
    </button>
  );
}