// src/components/build/DesignNodesEcosystemSection.jsx
import { useEffect } from 'react';
import ArrowButton from '../../common/ArrowButton';

const cards = [
  { title: 'XDC Design', desc: 'Learn about the EVM-compatible, Layer-1 XDC Network.', link: '#' },
  { title: 'Ecosystem', desc: 'Who is building on XDC?', link: '#' },
  { title: 'Nodes', desc: 'Deploy a node or learn more about nodes on the XDC Network.', link: '#' },
];

export default function EcosystemSection() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('animate-in');
        }),
      { threshold: 0.25 }
    );
    document.querySelectorAll('.slide-left').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* ¾-width top border */}
      <div className="flex justify-center">
        <div className="w-3/4 h-0.5 bg-black" />
      </div>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
        
          {/* One horizontal row of cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {cards.map((c, idx) => (
              <div
                key={idx}
                className="slide-left rounded-2xl p-8 flex flex-col"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <h3 className="text-2xl font-bold mb-2">{c.title}</h3>
                <p className="text-gray-700 mb-4 flex-grow">{c.desc}</p>
                <ArrowButton href={c.link}>Explore</ArrowButton>
              </div>
            ))}
          </div>
        </div>

        <style jsx global>{`
          .slide-left {
            opacity: 0;
            transform: translateX(40px);
            transition: opacity 0.7s ease-out, transform 0.7s ease-out;
          }
          .animate-in {
            opacity: 1;
            transform: translateX(0);
          }
        `}</style>
      </section>
    </>
  );
}