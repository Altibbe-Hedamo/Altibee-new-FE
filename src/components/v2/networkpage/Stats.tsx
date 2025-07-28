// src/components/sections/Stats.tsx
import CountUp from 'react-countup';

const stats = [
  { num: 2.333, suffix: ' ~sec', label: 'Avg Block Time', decimals: 3 },
  { num: 450_000_000, suffix: '+', label: 'Transactions', decimals: 0 },
  { num: 0.0000074, suffix: ' TWh', label: 'Energy', decimals: 7 },
];

const Stats = () => (
  <section className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      {/* left-aligned title */}
      <h2 className="text-2xl md:text-4xl font-bold mb-12 text-left">
        The XDC Network is equipped to keep pace with rapid blockchain adoption.
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-[#FFE5E8] h-48 w-full flex flex-col items-center justify-center"
          >
            <p className="text-4xl md:text-5xl font-bold text-[#131619]">
              <CountUp
                start={0}
                end={s.num}
                duration={2.5}
                decimals={s.decimals}
                separator=","
              />
              {s.suffix}
            </p>
            <p className="mt-2 text-lg text-[#5D6D74]">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;