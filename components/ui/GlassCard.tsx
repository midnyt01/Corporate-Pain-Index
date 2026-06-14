import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        `
        glass-card

        bg-[rgba(10,15,35,0.45)]

        backdrop-blur-xl

        border
        border-white/10

        rounded-[32px]

        shadow-[0_20px_80px_rgba(0,0,0,0.4)]

        p-8
        `,
        className
      )}
    >
      {children}
    </div>
  );
}