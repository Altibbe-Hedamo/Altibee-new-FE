import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// ---------- helper ----------
const AnimatedTextBorder = ({ children, direction = 'up', delay = 0 }) => {
  const slide = {
    left: { x: -60, opacity: 0 },
    right: { x: 60, opacity: 0 },
    up: { y: 40, opacity: 0 },
  };
  return (
    <motion.span
      initial={slide[direction]}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay }}
      className="relative inline-block"
    >
      {children}
      <motion.span
        className="absolute left-0 -bottom-1 h-0.5 w-full bg-emerald-400"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
      />
    </motion.span>
  );
};

// ---------- refined content ----------
const sections = [
  {
    id: 'audits',
    title: 'Holistic Audits & Evaluations',
    img: '/img/audit.jpg',
    bullets: [
      'On-site soil, water & processing checks',
      'Document & supply-chain verification',
      'Lab-grade contaminant & nutrient tests',
    ],
    cta: 'Book your audit',
  },
  {
    id: 'labels',
    title: 'Certified Health Labels',
    img: '/img/labels.jpg',
    bullets: [
      'Platinum • Gold • Green tiers',
      'QR-linked public reports',
      'Consumer trust & premium pricing',
    ],
    cta: 'Apply for label',
  },
  {
    id: 'markets',
    title: 'Global Market Certifications',
    img: '/img/market.jpg',
    bullets: [
      'USDA, EU-Eco, Halal, Kosher ready',
      'Regional label localization',
      'Regulatory roadmap & timelines',
    ],
    cta: 'Get global kit',
  },
  {
    id: 'partnerships',
    title: 'Long-Term Partnerships',
    img: '/img/partners.jpg',
    bullets: [
      'Quarterly quality check-ups',
      'Staff training & SOP templates',
      'Trend alerts & reformulation tips',
    ],
    cta: 'Join partner network',
  },
];

export default function HedamoPage() {
  return (
    <div className="min-h-screen bg-emerald-50 text-gray-800">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center"
               style={{ backgroundImage: "url('/img/hedamo-hero.jpg')" }}>
        <div className="absolute inset-0 bg-emerald-900/60"></div>
        <div className="relative z-10 text-center text-white px-6">
          <AnimatedTextBorder direction="up">
            <h1 className="font-mono text-5xl md:text-7xl drop-shadow-lg">
              Hedamo Certification & Services
            </h1>
          </AnimatedTextBorder>
          <p className="mt-4 text-xl max-w-2xl mx-auto drop-shadow">
            Your seal of health, transparency and global trust.
          </p>
          <p className="mt-2 text-lg max-w-2xl mx-auto drop-shadow">
            Altibbe Hedamo is the expert review and labeling program built for organic farms, food producers and wellness brands.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-32">
          {sections.map((sec, idx) => (
            <motion.div
              key={sec.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                idx % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`${idx % 2 === 0 ? '' : 'md:order-last'}`}>
                <img
                  src={sec.img}
                  alt={sec.title}
                  className="rounded-2xl shadow-xl w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <AnimatedTextBorder direction={idx % 2 === 0 ? 'right' : 'left'}>
                    {sec.title}
                  </AnimatedTextBorder>
                </h2>
                <ul className="space-y-2 text-lg text-gray-700">
                  {sec.bullets.map((b) => (
                    <li key={b} className="flex items-start">
                      <span className="mr-2 mt-1 text-emerald-500">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <button className="btn-mono mt-6 self-start">{sec.cta}</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            <AnimatedTextBorder direction="up">Vision 2024+</AnimatedTextBorder>
          </h2>
          <ul className="text-lg text-gray-600 space-y-2 list-inside">
            <li>Educate consumers to make informed wellness choices</li>
            <li>Celebrate and certify ethical, health-focused producers</li>
            <li>Build a transparent health-product ecosystem</li>
            <li>Set new sustainability benchmarks worldwide</li>
          </ul>
          <button className="btn-mono mt-8">Join the movement</button>
        </div>
      </section>

      {/* About Hedamo Review */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            <AnimatedTextBorder direction="up">About Hedamo Review</AnimatedTextBorder>
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            We assess organic farms and brands against strict health, quality & sustainability criteria using AI, lab analytics and blockchain traceability.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Producers gain credibility. Consumers gain clarity. Everyone gains transparency.
          </p>
          <button className="btn-mono">Request sample report</button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            <AnimatedTextBorder direction="up">Stay Informed</AnimatedTextBorder>
          </h2>
          <p className="text-gray-600 mb-6">
            Get Hedamo updates, label launches & market insights.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Subscribed!');
            }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Email address"
              required
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-emerald-500 outline-none"
            />
            <button type="submit" className="btn-mono">
              Join the Waitlist
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}