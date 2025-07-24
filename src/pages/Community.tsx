import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// ---------- helper ----------
const AnimatedTextBorder = ({ children, direction = 'up', delay = 0 }: any) => {
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
const contributeItems = [
  {
    title: 'Tell Your Soil Story on XDC.dev',
    description:
      'Publish lab data, drying curves, or carbon gains—get feedback from a global community that speaks both soil science and Solidity.',
    link: '#',
  },
  {
    title: 'Receive Harvest Alerts',
    description:
      'Get pinged when a new nutrient-dense crop hits the network, or when a farm near you joins the traceability program.',
    link: '#',
  },
  {
    title: 'Vote on Living Labels™',
    description:
      'Use the XDC Voting dApp to decide which soil-health metrics earn next season’s color-shifting seal.',
    link: '#',
  },
];

export default function Community() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <AnimatedTextBorder direction="up">
              AlTibe – Where Soil Meets Silicon
            </AnimatedTextBorder>
          </h1>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            AlTibe plugs organic integrity into the XDC Network, turning every
            root, bean and drop into a passport-carrying citizen of the
            blockchain.
          </motion.p>
        </div>
      </section>

      {/* Understanding the heartbeat */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              <AnimatedTextBorder direction="left">
                Listening to the pulse beneath the ledger
              </AnimatedTextBorder>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Long before AlTibe partnered with XDC, growers were already sharing
              soil data under the open sky. Today that same heartbeat beats
              on-chain: lab results, harvest logs, and carbon scores—transparent,
              immutable, alive.
            </p>
            <p className="text-lg text-gray-600">
              AlTibe.org is the watering hole where farmers, developers, and
              conscious consumers gather to watch nutrients travel from seedbed
              to smart contract.
            </p>
          </motion.div>
          <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl p-8 h-64 flex items-center justify-center">
            <span className="text-gray-500">Community Illustration</span>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            <AnimatedTextBorder direction="up">
              Living Ecosystem
            </AnimatedTextBorder>
          </h2>
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Because trust is baked into the XDC ledger, growers can focus on
            what they do best—feeding the soil—while brands focus on feeding
            people.
          </motion.p>
          <button className="btn-mono">Explore the Living Map</button>
        </div>
      </section>

      {/* Contribute */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              <AnimatedTextBorder direction="up">Grow with Us</AnimatedTextBorder>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Whether you code, compost, or create content, there’s a row for
              you in this shared garden.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contributeItems.map((item, i) => (
              <motion.a
                key={item.title}
                href={item.link}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-gray-50 hover:bg-gray-100 p-8 rounded-xl transition-all duration-300 block"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  <AnimatedTextBorder direction="right" delay={i * 0.1}>
                    {item.title}
                  </AnimatedTextBorder>
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center text-emerald-600 font-medium">
                  Learn more <ArrowRightIcon className="ml-2 h-4 w-4" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            <AnimatedTextBorder direction="up">
              Ready to let your product speak for itself?
            </AnimatedTextBorder>
          </h2>
          <button className="btn-mono">Start the Scan</button>
        </div>
      </section>
    </div>
  );
}