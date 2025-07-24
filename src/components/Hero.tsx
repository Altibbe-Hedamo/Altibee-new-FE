import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image (parallax) */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/public/image.png')`,
          y: bgY,
        }}
      >
        <div className="absolute inset-0 bg-emerald-900/70" />
      </motion.div>

      {/* Foreground curtain (slides up) */}
      <motion.div
        className="absolute inset-0 z-20 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: `url('/public/hero-curtain.png')`,
          y: useTransform(scrollYProgress, [0, 1], ['100%', '0%']),
        }}
      />

      {/* Text content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4"
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '-40%']) }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-bold font-mono mb-6"
        >
          Leading Transparency in Health and Wellness
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="max-w-3xl text-center text-lg text-emerald-100 mb-8"
        >
          We blend cutting-edge technology with time-tested wisdom to empower you with complete transparency in food and wellness products.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
          className="btn-mono"
        >
          Get Verified
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;