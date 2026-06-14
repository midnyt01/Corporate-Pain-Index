"use client";

import { useAssessment } from "@/context/AssessmentContext";

interface Props {
  questionId: string;
}

export default function LeadCaptureQuestion({
  questionId,
}: Props) {
  const { answers, setAnswer } =
    useAssessment();

const data =
  answers[questionId] || {};

const updateField = (
  field: string,
  value: any
) => {
  setAnswer(questionId, {
    ...data,
    [field]: value,
  });
};
  

  return (
    <div className="space-y-6">
      {/* Name */}

      <input
        type="text"
        placeholder="Your name (optional)"
        value={data.name || ""}
        onChange={(e) =>
          updateField(
            "name",
            e.target.value
          )
        }
        className="
          w-full
          h-16

          rounded-3xl

          border
          border-white/10

          bg-white/[0.03]

          px-6

          text-white

          placeholder:text-slate-500

          focus:outline-none
          focus:border-violet-500/40
        "
      />

      {/* Email */}

      <input
        type="email"
        placeholder="you@work.com"
        value={data.email || ""}
        onChange={(e) =>
          updateField(
            "email",
            e.target.value
          )
        }
        className="
          w-full
          h-16

          rounded-3xl

          border
          border-white/10

          bg-white/[0.03]

          px-6

          text-white

          placeholder:text-slate-500

          focus:outline-none
          focus:border-violet-500/40
        "
      />

      {/* Phone */}

      <input
        type="tel"
        placeholder="Phone number (optional)"
        value={data.phone || ""}
        onChange={(e) =>
          updateField(
            "phone",
            e.target.value
          )
        }
        className="
          w-full
          h-16

          rounded-3xl

          border
          border-white/10

          bg-white/[0.03]

          px-6

          text-white

          placeholder:text-slate-500

          focus:outline-none
          focus:border-violet-500/40
        "
      />

      {/* Interview */}

      <label
        className="
          flex
          items-center
          gap-4

          rounded-3xl

          border
          border-white/10

          bg-white/[0.03]

          p-6

          cursor-pointer

          hover:border-violet-500/30

          transition-all
        "
      >
        <input
          type="checkbox"
          checked={
            data.interview || false
          }
          onChange={(e) =>
            updateField(
              "interview",
              e.target.checked
            )
          }
          className="
            w-5
            h-5
          "
        />

        <span className="text-white">
          I'd be open to a 15-minute
          interview or detailed
          follow-up survey.
        </span>
      </label>

      {/* Beta Tester */}

      <label
        className="
          flex
          items-center
          gap-4

          rounded-3xl

          border
          border-white/10

          bg-white/[0.03]

          p-6

          cursor-pointer

          hover:border-violet-500/30

          transition-all
        "
      >
        <input
          type="checkbox"
          checked={
            data.betaTester || false
          }
          onChange={(e) =>
            updateField(
              "betaTester",
              e.target.checked
            )
          }
          className="
            w-5
            h-5
          "
        />

        <span className="text-white">
          I'd like early access as a
          beta tester when solutions
          are launched.
        </span>
      </label>
    </div>
  );
}