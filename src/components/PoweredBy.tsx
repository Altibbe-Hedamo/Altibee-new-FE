import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedTextBorder from './AnimatedTextBorder';
import ScrollUpLi from './common/ScrollUpLi';

const PoweredBy = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const partners = [
    'Organic Valley', 'Whole Foods', 'Thrive Market', 'Gaia Herbs',
    'Dr. Bronner’s', 'NOW Foods', 'Herbivore', 'Sun Potion',
    'Navitas Organics', 'Four Sigmatic', 'Amazing Grass', 'Garden of Life',
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          <AnimatedTextBorder direction="left" delay={0}>
            Our Focus Areas
          </AnimatedTextBorder>
        </h2>

        {/* plain list */}
        <ul className="max-w-4xl mx-auto mb-12 space-y-2 text-gray-700 list-disc list-inside">
          <li><strong>Organic Agriculture & Produce:</strong> Sustainable fruits, vegetables, grains and crops.</li>
          <li><strong>Animal Products:</strong> Clean, ethically-raised meat, seafood and dairy.</li>
          <li><strong>Beauty & Fashion:</strong> Natural cosmetics and eco-friendly fabrics.</li>
          <li><strong>Wellness Products:</strong> Herbal supplements and holistic health solutions.</li>
        </ul>

        {/* partners scroll-up + hover-bounce */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
          {partners.map((p, i) => (
            <motion.div
              key={p}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              whileHover={{
                y: [0, -6, 0],
                transition: { duration: 0.35, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
              }}
              className="flex items-center justify-center p-4 bg-gray-50 rounded-lg"
            >
              <span className="text-sm font-semibold text-gray-700">{p}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoweredBy;