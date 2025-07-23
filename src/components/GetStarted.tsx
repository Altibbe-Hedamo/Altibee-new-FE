import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedTextBorder from './AnimatedTextBorder';

const GetStarted = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const cards = [
    {
      title: 'Organic Farms',
      desc: 'Tailored strategies for organic farms and food producers to overcome challenges and seize new market opportunities.',
      btn: 'Join Our Waitlist to Get Verified',
    },
    {
      title: 'Food Producers',
      desc: 'Detailed reports and guidance on product innovation and differentiation, highlighting unique health benefits.',
      btn: 'Get Product Review',
    },
    {
      title: 'Natural Innovators',
      desc: 'Support with international certifications and partnerships, helping products meet regional standards and reach new markets.',
      btn: 'Join the Waitlist',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          <AnimatedTextBorder direction="up" delay={0}>
            Leading Transparency in Health and Wellness
          </AnimatedTextBorder>
        </h2>

        <motion.p
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center text-gray-700 mb-12"
        >
          At Altibbe, we combine innovation with time-honored wisdom to help you make healthier choices. Our Transparency-First approach means you get full visibility into the origins and quality of every food and wellness product you buy.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl mx-auto text-center text-gray-700 mb-12"
        >
          Our mission, <strong className="font-semibold text-emerald-600">Health for Humanity</strong>, drives everything we do. From supporting organic farms to developing smart farm technologies, we connect people like you with ethical producers for a healthier, more sustainable future.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-4">
                <AnimatedTextBorder direction="right" delay={i * 0.25}>
                  {c.title}
                </AnimatedTextBorder>
              </h3>
              <p className="text-gray-600 mb-6">{c.desc}</p>
              <button className="btn-mono w-full">{c.btn}</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;