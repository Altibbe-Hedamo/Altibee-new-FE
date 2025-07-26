import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import AnimatedTextBorder from './common/AnimatedTextBorder';

const WhatsHappening = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [current, setCurrent] = useState(0);

  const items = [
    {
      year: '2020',
          title: 'The Beginning',
          body: 'Altibbe launched Hedamo in response to a global health crisis. We saw a lack of trust in health products and set out to build a transparent solution.',
        },
        {
          year: '2021',
          title: 'Food as Medicine',
          body: 'Inspired by ancient wisdom, we began promoting “food as medicine,” empowering healthier lifestyles and sustainable practices.',
        },
        {
          year: '2023',
          title: 'Health Transparency Standards',
          body: 'We pioneered blockchain-based traceability, creating new benchmarks for product quality and sustainability.',
        },
        {
          year: '2024',
          title: 'Consumer Empowerment',
          body: 'We introduced QR-coded labels linking to in-depth reports, giving consumers full visibility into product origins and health benefits.',
        },
        {
          year: '2025',
          title: 'Looking Ahead',
          body: 'Continuing our mission, we plan to expand our AI-powered tools and partnerships, making health independence accessible to all.',
        },
  ];

  const next = () => setCurrent((c) => (c + 1) % items.length);
  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length);

  return (
<section ref={ref} className="py-20 bg-white z-10">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
      <AnimatedTextBorder direction="up" delay={0}>
        Altibbe Story Timeline
      </AnimatedTextBorder>
    </h2>

    {/* timeline wrapper */}
    <div className="relative max-w-3xl mx-auto">
      {/* vertical line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-emerald-300 -translate-x-1/2" />

      {items.map((item, idx) => {
        const isLeft = idx % 2 === 0;
        return (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className={`relative mb-12 flex items-start md:justify-between
                        ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            {/* content card */}
            <div
              className={`w-full md:w-[calc(50%-2rem)]
                       
                          rounded-xl p-6 text-black 
                          ${isLeft ? 'md:mr-8' : 'md:ml-8'}`}
            >
              <h3 className="text-xl font-bold mb-2">
                <AnimatedTextBorder direction="right" delay={0.1}>
                  {item.year} – {item.title}
                </AnimatedTextBorder>
              </h3>
              <p className="text-sm text-black">{item.body}</p>
            </div>

            {/* dot on the line */}
            <div className="absolute left-1/2 top-4 w-4 h-4 bg-cyan-200 rounded-full -translate-x-1/2 shadow" />
          </motion.div>
        );
      })}
    </div>

    {/* keep the rest unchanged */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="mt-16 text-center"
    >
      <h3 className="text-2xl font-bold mb-4">
        <AnimatedTextBorder direction="up">Trusted Health Labels</AnimatedTextBorder>
      </h3>
      <p className="max-w-2xl mx-auto text-gray-700 mb-6">
        Hedamo offers <strong className="text-emerald-600">Platinum, Gold and Green labels</strong> …
      </p>
      <motion.a whileHover={{ scale: 1.05 }} href="#" className="btn-mono">
        Find Out More
      </motion.a>
    </motion.div>
  </div>
</section>
  );
};

export default WhatsHappening;