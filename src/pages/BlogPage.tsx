import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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

// ---------- blog data ----------
export const posts = [
  {
    slug: 'time-tested-detox',
    title: 'Time-Tested Detox Practices',
    excerpt:
      'Discover the science behind ancient detox methods and how they can support modern wellness routines.',
    date: 'July 23, 2025',
    category: 'Wellness Tips',
    thumbnail: '/img/detox-thumb.jpg',
    content: `
      <p>Detoxing isn’t a fad; it’s a return to earth-based wisdom. In this post we unpack charcoal, citrus and clay rituals that modern science now confirms.</p>
      <ul><li>Why activated charcoal binds toxins</li><li>How citrus pectin supports liver phase-II</li><li>DIY bentonite clay bath recipe</li></ul>
    `,
  },
  {
    slug: 'mind-body-health',
    title: 'Mind-Body Health: Natural Nutrition',
    excerpt:
      'Learn how a balanced diet nurtures both physical and mental health, with practical tips for mindful eating.',
    date: 'July 18, 2025',
    category: 'Natural Nutrition',
    thumbnail: '/img/mind-body-thumb.jpg',
    content: `
      <p>Food as medicine extends beyond the gut to the brain. We explore omega-3 fats, fermented foods and polyphenols that drive neuroplasticity.</p>
      <ol><li>Three fermented staples to add today</li><li>Polyphenol-rich teas for focus</li><li>Chew-count mindfulness exercise</li></ol>
    `,
  },
  {
    slug: 'soil-health-secrets',
    title: 'Soil Health Secrets for Urban Gardens',
    excerpt:
      'Unlock regenerative techniques that turn any balcony or backyard into a thriving, nutrient-dense garden.',
    date: 'July 12, 2025',
    category: 'Sustainable Living',
    thumbnail: '/img/soil-thumb.jpg',
    content: `
      <p>Healthy soil means healthy humans. We teach you to brew compost tea, use biochar and companion-plant for resilient micro-ecosystems.</p>
      <ul><li>Step-by-step compost tea recipe</li><li>Biochar activation guide</li><li>Companion planting chart</li></ul>
    `,
  },
];

// ---------- blog list ----------
export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <AnimatedTextBorder direction="up">
              Altibbe Insights
            </AnimatedTextBorder>
          </h1>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Explore our blog for tips on holistic health, nutrition and sustainability. Our experts share science-backed advice and stories from around the world.
          </motion.p>
        </div>
      </section>

      {/* Mason grid */}
      <section className="px-4 md:px-8 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-32">
          {posts.map((post, idx) => (
            <motion.article
              key={post.slug}
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
                  src={post.thumbnail}
                  alt={post.title}
                  loading="lazy"
                  className="rounded-2xl shadow-xl w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-emerald-600 font-mono text-sm tracking-widest">
                  {post.date} • {post.category}
                </p>
                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                  <AnimatedTextBorder direction="left" delay={0.1}>
                    {post.title}
                  </AnimatedTextBorder>
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="btn-mono mt-6 self-start"
                >
                  Read More <ArrowRightIcon className="inline ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            <AnimatedTextBorder direction="up">Stay Informed</AnimatedTextBorder>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-lg text-gray-600 mb-8"
          >
            Join our newsletter to get the latest health and sustainability insights delivered to your inbox.
          </motion.p>
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
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
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