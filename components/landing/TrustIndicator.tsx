import GlassCard from "../ui/GlassCard";

const items = [
  {
    value: "3 Min",
    label: "Average Time",
  },

  {
    value: "12",
    label: "Questions",
  },

  {
    value: "100%",
    label: "Anonymous",
  },
];

export default function TrustIndicators() {
  return (
    <section className="pb-32 px-6">
      <div
        className="
        max-w-5xl

        mx-auto

        grid

        md:grid-cols-3

        gap-6
        "
      >
        {items.map((item) => (
          <GlassCard
            key={item.label}
            className="text-center"
          >
            <h3
              className="
              text-4xl
              font-bold

              gradient-text

              mb-3
              "
            >
              {item.value}
            </h3>

            <p className="text-slate-400">
              {item.label}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}