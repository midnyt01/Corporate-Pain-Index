"use client";

import {
  useSortable,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

import {
   Menu,
} from "lucide-react";

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

        <div
          className="
          flex-1

          min-w-0

          pr-2
          "
        >
          <h3
            className="
            text-white

            font-semibold

            text-sm
            md:text-base

            truncate
            "
          >
            {title}
          </h3>

          <p
            className="
            text-slate-400

            text-xs
            md:text-sm

            mt-1

            line-clamp-1
            "
          >
            {description}
          </p>
        </div>

        {/* Drag Handle */}

        <button
          {...attributes}
          {...listeners}
          className="
            shrink-0

            p-2

            rounded-xl

            text-slate-500

            hover:text-white

            transition-all

            cursor-grab
            active:cursor-grabbing

            touch-none
          "
          aria-label="Drag item"
        >
          < Menu
            className="
            h-5
            w-5
            "
          />
        </button>
      </div>
    </div>
  );
}