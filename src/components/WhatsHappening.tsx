import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import AnimatedTextBorder from './AnimatedTextBorder';

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
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          <AnimatedTextBorder direction="up" delay={0}>
            Altibbe Story Timeline
          </AnimatedTextBorder>
        </h2>

        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {items.slice(current, current + 3).map((item, idx) => (
                  <motion.div
                    key={`${current}-${idx}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-6 text-white relative group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-2">
                        <AnimatedTextBorder direction="right" delay={0.1 + idx * 0.1}>
                          {item.year} – {item.title}
                        </AnimatedTextBorder>
                      </h3>
                      <p className="text-sm text-emerald-100">{item.body}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={prev} className="btn-mono absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 bg-white text-gray-600 p-2 rounded-full">
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button onClick={next} className="btn-mono absolute right-0 top-1/2 translate-x-4 -translate-y-1/2 bg-white text-gray-600 p-2 rounded-full">
            <ChevronRightIcon className="h-5 w-5" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(items.length / 3) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i * 3)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  Math.floor(current / 3) === i ? 'bg-emerald-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            <AnimatedTextBorder direction="up">
              Trusted Health Labels
            </AnimatedTextBorder>
          </h3>
          <p className="max-w-2xl mx-auto text-gray-700 mb-6">
            Hedamo offers <strong className="text-emerald-600">Platinum, Gold and Green labels</strong> that certify excellence in health practices and sustainability. Each certified product features a QR code linking to a full report on its sourcing, health benefits, and eco-friendly methods. By leveraging blockchain and AI, we ensure unmatched traceability from farm to shelf, so you can shop with confidence.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#"
            className="btn-mono"
          >
            Find Out More
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsHappening;