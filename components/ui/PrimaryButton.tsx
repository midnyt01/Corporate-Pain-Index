import {
  ButtonHTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function PrimaryButton({
  children,
  className,
  disabled,
  ...props
}: Props) {
  return (
    <button
      disabled={disabled}
      className={cn(
        `
        inline-flex
        items-center
        justify-center

        rounded-[20px]

        px-8
        py-4

        font-semibold

        transition-all
        duration-300

        text-white

        bg-gradient-to-r
        from-violet-500
        to-violet-400

        hover:scale-[1.02]

        shadow-lg
        shadow-violet-500/20

        disabled:opacity-40
        disabled:cursor-not-allowed
        disabled:hover:scale-100
        disabled:shadow-none
        `,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}