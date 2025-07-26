import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedTextBorder from './AnimatedTextBorder';

const PoweredBy = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const partners = [
    'Organic Valley', 'Whole Foods', 'Thrive Market', 'Gaia Herbs',
    'Dr. Bronner’s', 'NOW Foods', 'Herbivore', 'Sun Potion',
    'Navitas Organics', 'Four Sigmatic', 'Amazing Grass', 'Garden of Life',
  ];

  const NUM_CARDS = 6;
  const STAGGER = 400;            // ms between card starts
  const DURATION = 2400;          // ms between updates for one card

  // each entry is the index in the master partners list for that card
  const [indices, setIndices] = useState(
    Array.from({ length: NUM_CARDS }, (_, i) => i) // start 0-5
  );

  useEffect(() => {
    if (!inView) return;

    const timers = [];
    for (let i = 0; i < NUM_CARDS; i++) {
      // staggered start
      const start = setTimeout(() => {
        const interval = setInterval(() => {
          setIndices(prev =>
            prev.map((val, cardIdx) =>
              cardIdx === i ? (val + NUM_CARDS) % partners.length : val
            )
          );
        }, DURATION);
        timers.push(interval);
      }, i * STAGGER);
      timers.push(start);
    }

    return () => timers.forEach(clearTimeout);
  }, [inView, partners.length]);

  return (
    <section ref={ref} className="py-20 bg-white z-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          <AnimatedTextBorder direction="left" delay={0}>
            Our Focus Areas
          </AnimatedTextBorder>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-stretch">
          {indices.map((idx, cardNo) => (
            <ScrollCard key={cardNo} text={partners[idx]} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------- */
/* One card that scrolls its text up/down             */
/* -------------------------------------------------- */
const ScrollCard = ({ text }) => (
  <div className="w-full h-24 rounded-lg bg-gray-50 flex overflow-hidden">
    <motion.div
      key={text} // forces re-animation when text changes
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full flex items-center justify-center p-3"
    >
      <span className="text-sm font-semibold text-gray-700">{text}</span>
    </motion.div>
  </div>
);

export default PoweredBy;