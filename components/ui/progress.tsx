"use client";

import * as React from "react";
import { Progress as ProgressPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<
  typeof ProgressPrimitive.Root
>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        `
        relative

        w-full

        overflow-hidden

        rounded-full

        bg-white/10

        h-2
        md:h-2.5
        lg:h-3
        `,
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="
          h-full
          w-full

          bg-gradient-to-r
          from-violet-500
          via-fuchsia-500
          to-cyan-500

          transition-all
          duration-700
          ease-out
        "
        style={{
          transform: `translateX(-${
            100 - (value || 0)
          }%)`,
        }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };