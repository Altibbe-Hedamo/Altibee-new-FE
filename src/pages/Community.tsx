import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// Re-use the same helper
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

const Community = () => {
  const contributeItems = [
    {
      title: 'Participate in Community Discussion on XDC.dev',
      description: 'Join developers and community members in technical discussions',
      link: '#',
    },
    {
      title: 'Get emails about upcoming XDC events',
      description: 'Stay informed about conferences, meetups, and community events',
      link: '#',
    },
    {
      title: 'Track what\'s happening on XDC Voting Dapp',
      description: 'Participate in governance and community decision making',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <AnimatedTextBorder direction="up">Join a thriving and diverse Community</AnimatedTextBorder>
          </h1>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Embark on a journey with the XDC Network's enthusiastic early adopters, passionate developers, and the global community, who play an everyday role in the network's usage and adoption.
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
              <AnimatedTextBorder direction="left">Understanding the heartbeat behind the network</AnimatedTextBorder>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              XDC's global community existed for years before XDC Foundation's inception in 2021. The heartbeat of the XDC Network consists of its developers, content creators, validators, stakeholders, enterprises and affiliated organizations.
            </p>
            <p className="text-lg text-gray-600">
              XDC.org is designed to be a community hub, aggregating key data, community voices and resources. This is a watering hole for all things XDC.
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
            <AnimatedTextBorder direction="up">XDC Ecosystem</AnimatedTextBorder>
          </h2>
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            The XDC Network maintains a robust, diverse and evolving ecosystem. Because participants trust in the network's performance, they can focus on content creation, business strategy and growth.
          </motion.p>
          <button className="btn-mono">Explore Ecosystem</button>
        </div>
      </section>

      {/* Contribute */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              <AnimatedTextBorder direction="up">Contribute</AnimatedTextBorder>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              The XDC community includes a global network of individuals with different skills contributing to the ecosystem's growth. Each participant can play a role and there are many ways to get involved.
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
            <AnimatedTextBorder direction="up">Heard enough? Start building with XDC today</AnimatedTextBorder>
          </h2>
          <button className="btn-mono">Get started with XDC</button>
        </div>
      </section>
    </div>
  );
};

export default Community;