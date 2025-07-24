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
const pillars = [
  {
    title: 'Holistic Transparency',
    img: '/img/about-soil.jpg',
    bullets: [
      'On-farm soil & water audits',
      'Supply-chain traceability via blockchain',
      'QR-linked public reports for every product'
    ],
    cta: 'Learn more',
  },
  {
    title: 'Certified Health Labels',
    img: '/img/about-labels.jpg',
    bullets: [
      'Platinum • Gold • Green tiers',
      'Science-backed nutrient validation',
      'Consumer confidence & premium pricing'
    ],
    cta: 'Get certified',
  },
  {
    title: 'Global Reach',
    img: '/img/about-market.jpg',
    bullets: [
      'International organic standards',
      'Cultural dietary compliance',
      'Seamless market entry'
    ],
    cta: 'Expand globally',
  },
];

const stories = [
  {
    title: 'From Seed to Shelf',
    excerpt:
      'Every carrot, every cream and every capsule can be traced back to the hand that planted it.',
  },
  {
    title: 'Food as Medicine',
    excerpt:
      'We prove that what nourishes the soil nourishes the body—and the planet.',
  },
  {
    title: 'Community First',
    excerpt:
      'Producers, consumers and planet thrive together in a transparent ecosystem.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <AnimatedTextBorder direction="up">
              Altibbe – Health Wisdom Virtue
            </AnimatedTextBorder>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Since 2017 we have united organic farms, wellness brands and conscious consumers under one promise: transparency from seed to shelf.
          </motion.p>
        </div>
      </section>

      {/* Altibbe Pillars */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-32">
          {pillars.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                idx % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`${idx % 2 === 0 ? '' : 'md:order-last'}`}>
                <img
                  src={p.img}
                  alt={p.title}
                  className="rounded-2xl shadow-xl w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <AnimatedTextBorder direction={idx % 2 === 0 ? 'right' : 'left'}>
                    {p.title}
                  </AnimatedTextBorder>
                </h2>
                <ul className="space-y-2 text-lg text-gray-700">
                  {p.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
                <button className="btn-mono mt-6 self-start">{p.cta}</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">
            <AnimatedTextBorder direction="up">
              Stories from the Soil
            </AnimatedTextBorder>
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {stories.map((story, idx) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-3">{story.title}</h3>
                <p className="text-gray-600">{story.excerpt}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision 2024+ */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            <AnimatedTextBorder direction="up">
              Vision 2024+
            </AnimatedTextBorder>
          </h2>
          <ul className="space-y-2 text-lg">
            <li>Educate consumers to make informed wellness choices</li>
            <li>Celebrate and certify ethical, health-focused producers</li>
            <li>Build a transparent health-product ecosystem</li>
            <li>Set new sustainability benchmarks worldwide</li>
          </ul>
          <button className="btn-mono bg-white text-emerald-600 mt-8">
            Join the Movement
          </button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            <AnimatedTextBorder direction="up">
              Stay Rooted
            </AnimatedTextBorder>
          </h2>
          <p className="text-gray-600 mb-8">
            Get soil stories, label launches & health tips delivered monthly.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Welcome to the Altibbe family!');
            }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-emerald-500 outline-none"
            />
            <button type="submit" className="btn-mono">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}