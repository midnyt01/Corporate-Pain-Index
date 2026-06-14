import SectionTitle from "../ui/SectionTitle";
import GlassCard from "../ui/GlassCard";

const steps = [
  {
    number: "01",
    title: "Answer Questions",
    description:
      "Tell us about your professional challenges.",
  },

  {
    number: "02",
    title: "AI Analysis",
    description:
      "We calculate your pain profile.",
  },

  {
    number: "03",
    title: "Get Report",
    description:
      "Discover your biggest bottleneck.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="
      py-32
      px-6
      "
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          centered
          badge="How It Works"
          title="A 3 Minute Professional Audit"
          subtitle="Understand where your biggest opportunity lies."
        />

        <div
          className="
          grid
          md:grid-cols-3
          gap-8

          mt-16
          "
        >
          {steps.map((step) => (
            <GlassCard key={step.number}>
              <div
                className="
                text-cyan-400

                text-sm

                mb-4

                tracking-[0.2em]
                "
              >
                {step.number}
              </div>

              <h3
                className="
                text-2xl
                font-bold

                mb-3
                "
              >
                {step.title}
              </h3>

              <p className="text-slate-400">
                {step.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}