interface Props {
  children: React.ReactNode;
}

export default function ResultCard({
  children,
}: Props) {
  return (
    <div
      className="
      rounded-[28px]

      border
      border-white/10

      bg-white/[0.03]

      backdrop-blur-xl

      p-6
    "
    >
      {children}
    </div>
  );
}