"use client";

import {
  useSortable,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

interface Props {
  id: string;
  rank: number;
  title: string;
  description: string;
}

export default function SortableItem({
  id,
  rank,
  title,
  description,
}: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
  });

  const style = {
    transform:
      CSS.Transform.toString(
        transform
      ),

    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`
        rounded-3xl

        border

        ${
          isDragging
            ? "border-violet-500"
            : "border-white/10"
        }

        bg-white/[0.03]

        backdrop-blur-xl

        p-5

        transition-all

        cursor-grab

        active:cursor-grabbing

        touch-none

        select-none

        ${
          isDragging
            ? "scale-[1.02] shadow-2xl"
            : ""
        }
      `}
    >
      <div
        className="
        flex

        items-center

        gap-4
        "
      >
        {/* Rank */}

        <div
          className="
          w-10
          h-10

          rounded-full

          bg-violet-500/15

          flex

          items-center

          justify-center

          text-sm

          font-semibold

          text-violet-300

          shrink-0
          "
        >
          {rank}
        </div>

        {/* Content */}

        <div className="flex-1 min-w-0">
          <h3
            className="
            text-white

            font-semibold

            text-sm
            md:text-base
            "
          >
            {title}
          </h3>

          <p
            className="
            text-sm

            text-slate-400

            mt-1
            "
          >
            {description}
          </p>
        </div>

        {/* Visual Drag Hint */}

        <div
          className="
          text-slate-500

          text-2xl

          shrink-0

          select-none
          "
        >
          ☰
        </div>
      </div>
    </div>
  );
}