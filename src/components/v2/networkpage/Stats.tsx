// src/components/sections/Stats.tsx
const Stats = () => (
  <section className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-12">
        The XDC Network is equipped to keep pace with rapid blockchain adoption.
      </h2>
      <div className="grid md:grid-cols-3 gap-12">
        {[{
          num: "2.333 ~sec", label: "Avg Block Time"
        }, {
          num: "450 000 000+", label: "Transactions"
        }, {
          num: "0.000 0074 TWh", label: "Energy"
        }].map((s, i) => (
          <div key={i}>
            <p className="text-4xl md:text-6xl font-bold text-[#131619]">{s.num}</p>
            <p className="mt-2 text-lg text-[#9FF3FF]">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Stats;