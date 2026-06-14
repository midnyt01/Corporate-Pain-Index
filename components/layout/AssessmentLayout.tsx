import Logo from "./Logo";

import AssessmentProgress from "@/components/ui/AssessmentProgress";

interface Props {
  currentStep: number;
  totalSteps: number;
  children: React.ReactNode;
}

export default function AssessmentLayout({
  currentStep,
  totalSteps,
  children,
}: Props) {
  return (
    <main
      className="
      min-h-screen
      px-4
      sm:px-6
      lg:px-8

      py-5
      "
    >
      <div
        className="
        max-w-6xl

        mx-auto

        flex

        justify-between

        items-center

        mb-16
        "
      >
        <Logo />

        <AssessmentProgress
          current={currentStep}
          total={totalSteps}
        />
      </div>

      <div
        className="
        max-w-[800px]

        mx-auto
        "
      >
        {children}
      </div>
    </main>
  );
}