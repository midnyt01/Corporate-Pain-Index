"use client";

import {
  DndContext,
  closestCenter,
  TouchSensor,
  MouseSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import {
  useState,
  useEffect,
} from "react";

import {
  ChevronUp,
  ChevronDown,
} from "lucide-react";

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
    title:
      "💰 Tax & Investment Planning",
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
    title:
      "📅 Meeting Scheduling",
    description:
      "Finding time and coordinating meetings",
  },
  {
    id: "resume",
    title:
      "📄 Resume & LinkedIn",
    description:
      "Personal branding and opportunities",
  },
];

export default function RankingQuestion({
  questionId,
}: Props) {
  const {
    answers,
    setAnswer,
  } = useAssessment();

  const [items, setItems] =
    useState(defaultItems);

  const [isMobile, setIsMobile] =
    useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768
      );
    };

    checkMobile();

    window.addEventListener(
      "resize",
      checkMobile
    );

    return () =>
      window.removeEventListener(
        "resize",
        checkMobile
      );
  }, []);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 10,
      },
    })
  );

  useEffect(() => {
    const savedRanking =
      answers[questionId];

    if (
      savedRanking &&
      Array.isArray(savedRanking)
    ) {
      const restoredItems =
        savedRanking
          .map((title: string) =>
            defaultItems.find(
              (item) =>
                item.title === title
            )
          )
          .filter(Boolean);

      if (
        restoredItems.length ===
        defaultItems.length
      ) {
        setItems(
          restoredItems as typeof defaultItems
        );
      }
    } else {
      setAnswer(
        questionId,
        defaultItems.map(
          (item) => item.title
        )
      );
    }
  }, []);

  const handleDragEnd = (
    event: any
  ) => {
    const { active, over } =
      event;

    if (
      !over ||
      active.id === over.id
    )
      return;

    const oldIndex =
      items.findIndex(
        (item) =>
          item.id === active.id
      );

    const newIndex =
      items.findIndex(
        (item) =>
          item.id === over.id
      );

    const newItems =
      arrayMove(
        items,
        oldIndex,
        newIndex
      );

    setItems(newItems);

    setAnswer(
      questionId,
      newItems.map(
        (item) => item.title
      )
    );
  };

  const moveItem = (
    index: number,
    direction:
      | "up"
      | "down"
  ) => {
    const targetIndex =
      direction === "up"
        ? index - 1
        : index + 1;

    if (
      targetIndex < 0 ||
      targetIndex >=
        items.length
    ) {
      return;
    }

    const newItems =
      arrayMove(
        items,
        index,
        targetIndex
      );

    setItems(newItems);

    setAnswer(
      questionId,
      newItems.map(
        (item) => item.title
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
        {isMobile
          ? "Use the arrows to rank from MOST impactful to LEAST impactful."
          : "Drag cards to rank from MOST impactful to LEAST impactful."}
      </p>

      <DndContext
        sensors={
          isMobile
            ? []
            : sensors
        }
        collisionDetection={
          closestCenter
        }
        onDragEnd={
          handleDragEnd
        }
      >
        <SortableContext
          items={items}
          strategy={
            verticalListSortingStrategy
          }
        >
<div className="space-y-4">
  {items.map(
    (
      item,
      index
    ) => (
      <SortableItem
        key={item.id}
        id={item.id}
        rank={index + 1}
        title={item.title}
        description={
          item.description
        }
        isMobile={isMobile}
        onMoveUp={() =>
          moveItem(
            index,
            "up"
          )
        }
        onMoveDown={() =>
          moveItem(
            index,
            "down"
          )
        }
        disableUp={
          index === 0
        }
        disableDown={
          index ===
          items.length - 1
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