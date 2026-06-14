"use client";

import {
  useSortable,
} from "@dnd-kit/sortable";

import {
  CSS,
} from "@dnd-kit/utilities";

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
      className="
      cursor-grab

      rounded-3xl

      border
      border-white/10

      bg-white/[0.03]

      p-5

      flex
      items-center
      gap-4

      hover:border-violet-500/40

      transition-all
      "
    >
      <div
        className="
        w-10
        h-10

        rounded-full

        bg-violet-500/20

        flex
        items-center
        justify-center

        font-bold
        "
      >
        {rank}
      </div>

      <div>
        <h3
          className="
          font-semibold
          text-lg
          "
        >
          {title}
        </h3>

        <p
          className="
          text-slate-400
          text-sm
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}