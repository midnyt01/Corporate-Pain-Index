export default function BackgroundGlow() {
  return (
    <>
      {/* Base */}
      <div className="fixed inset-0 -z-50 bg-[#050816]" />

      {/* Left Purple Wash */}
      <div
        className="
        fixed
        -left-[20%]
        top-[-15%]
        w-[1000px]
        h-[1000px]
        rounded-full
        bg-[#8B5CF6]/30
        blur-[220px]
        -z-40
      "
      />

      {/* Center Purple */}
      <div
        className="
        fixed
        left-[20%]
        top-[25%]
        w-[700px]
        h-[700px]
        rounded-full
        bg-[#7C3AED]/20
        blur-[180px]
        -z-40
      "
      />

      {/* Right Cyan Wash */}
      <div
        className="
        fixed
        -right-[15%]
        top-[-5%]
        w-[900px]
        h-[900px]
        rounded-full
        bg-[#06B6D4]/25
        blur-[220px]
        -z-40
      "
      />

      {/* Bottom Purple Glow */}
      <div
        className="
        fixed
        left-1/2
        bottom-[-400px]
        -translate-x-1/2
        w-[1000px]
        h-[1000px]
        rounded-full
        bg-[#8B5CF6]/20
        blur-[260px]
        -z-40
      "
      />

      {/* Subtle Center Blend */}
      <div
        className="
        fixed
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[800px]
        h-[800px]
        rounded-full
        bg-violet-500/10
        blur-[180px]
        -z-40
      "
      />
    </>
  );
}