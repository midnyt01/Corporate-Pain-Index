import GlassCard from "../ui/GlassCard";

export default function ReportPreview() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <GlassCard>
          <h3
            className="
            text-3xl

            font-bold

            mb-8

            text-center
            "
          >
            Example Report
          </h3>

          <div
            className="
            grid
            md:grid-cols-4
            gap-4
            "
          >
            <GlassCard className="text-center">
              <h4 className="text-slate-400">
                Career
              </h4>

              <p className="text-3xl font-bold">
                89
              </p>
            </GlassCard>

            <GlassCard className="text-center">
              <h4 className="text-slate-400">
                Productivity
              </h4>

              <p className="text-3xl font-bold">
                61
              </p>
            </GlassCard>

            <GlassCard className="text-center">
              <h4 className="text-slate-400">
                Wealth
              </h4>

              <p className="text-3xl font-bold">
                42
              </p>
            </GlassCard>

            <GlassCard className="text-center">
              <h4 className="text-slate-400">
                Health
              </h4>

              <p className="text-3xl font-bold">
                74
              </p>
            </GlassCard>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}