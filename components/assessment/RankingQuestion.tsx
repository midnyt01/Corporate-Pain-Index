
"use client";

import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { useState } from "react";

import {
  useAssessment,
} from "@/context/AssessmentContext";

import SortableItem from "./SortableItem";

interface Props {
  questionId: string;
}

const defaultItems = [
  {
    id: "career",
    title: "🚀 Career Development",
    description:
      "Skills, promotions and career growth",
  },

  {
    id: "fitness",
    title: "💪 Fitness & Health",
    description:
      "Workout consistency and health goals",
  },

  {
    id: "tax",
    title: "💰 Tax & Investment Planning",
    description:
      "Taxes, investing and wealth creation",
  },

  {
    id: "email",
    title: "📧 Email Management",
    description:
      "Inbox overload and communication",
  },

  {
    id: "notes",
    title: "📝 Meeting Notes",
    description:
      "Tracking actions and decisions",
  },

  {
    id: "scheduling",
    title: "📅 Meeting Scheduling",
    description:
      "Finding time and coordinating meetings",
  },

  {
    id: "resume",
    title: "📄 Resume & LinkedIn",
    description:
      "Personal branding and opportunities",
  },
];

export default function RankingQuestion({
  questionId,
}: Props) {
  const { setAnswer } =
    useAssessment();

  const [items, setItems] =
    useState(defaultItems);

  const handleDragEnd = (
    event: any
  ) => {
    const { active, over } = event;

    if (
      !over ||
      active.id === over.id
    )
      return;

    const oldIndex = items.findIndex(
      (item) =>
        item.id === active.id
    );

    const newIndex = items.findIndex(
      (item) =>
        item.id === over.id
    );

    const newItems = arrayMove(
      items,
      oldIndex,
      newIndex
    );

    setItems(newItems);

    setAnswer(
      questionId,
      newItems.map(
        (item) => item.id
      )
    );
  };

  return (
    <div>
      <p
        className="
        text-slate-400
        mb-6
        text-sm
        "
      >
        Drag cards to rank from
        MOST impactful to LEAST
        impactful.
      </p>

      <DndContext
        collisionDetection={
          closestCenter
        }
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={items}
          strategy={
            verticalListSortingStrategy
          }
        >
          <div className="space-y-4">
            {items.map(
              (item, index) => (
                <SortableItem
                  key={item.id}
                  id={item.id}
                  rank={
                    index + 1
                  }
                  title={
                    item.title
                  }
                  description={
                    item.description
                  }
                />
              )
            )}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}