"use client";

import {
  useSortable,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

import {
  GripVertical,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

interface Props {
  id: string;
  rank: number;
  title: string;
  description: string;
  isMobile?: boolean;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  disableUp?: boolean;
  disableDown?: boolean;
}

export default function SortableItem({
  id,
  rank,
  title,
  description,
  isMobile = false,
  onMoveUp,
  onMoveDown,
  disableUp,
  disableDown,
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
      {...(!isMobile
        ? attributes
        : {})}
      {...(!isMobile
        ? listeners
        : {})}
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
          !isMobile
            ? "cursor-grab active:cursor-grabbing"
            : ""
        }

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

        {/* Mobile Arrows */}

        {isMobile && (
          <div
            className="
            flex
            flex-col

            items-center

            gap-1

            shrink-0
            "
          >
            <button
              onClick={onMoveUp}
              disabled={disableUp}
              className="
              text-slate-400

              hover:text-white

              disabled:opacity-20

              transition-all
              "
            >
              <ChevronUp
                className="
                h-5
                w-5
                "
              />
            </button>

            <button
              onClick={onMoveDown}
              disabled={disableDown}
              className="
              text-slate-400

              hover:text-white

              disabled:opacity-20

              transition-all
              "
            >
              <ChevronDown
                className="
                h-5
                w-5
                "
              />
            </button>
          </div>
        )}

        {/* Desktop Drag */}

        {!isMobile && (
          <GripVertical
            className="
            h-5
            w-5

            text-slate-500

            shrink-0
            "
          />
        )}
      </div>
    </div>
  );
}