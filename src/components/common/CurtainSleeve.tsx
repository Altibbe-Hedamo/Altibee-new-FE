// components/CurtainSleeve.tsx
export default function CurtainSleeve({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative z-10 bg-[#131619] translate-z-0">
      {children}
    </section>
  );
}