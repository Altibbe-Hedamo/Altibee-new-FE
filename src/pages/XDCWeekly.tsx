import React from 'react';
import { motion } from 'framer-motion';
import { PlayIcon } from '@heroicons/react/24/solid';

const XDCWeekly = () => {
  const episodes = [
    { number: 126, dateRange: 'July 13 – July 19, 2025' },
    { number: 125, dateRange: 'July 6 – July 12, 2025' },
    { number: 124, dateRange: 'June 29 – July 5, 2025' },
    { number: 123, dateRange: 'June 22 – June 28, 2025' },
    { number: 122, dateRange: 'June 15 – June 21, 2025' },
    { number: 121, dateRange: 'June 8 – June 14, 2025' },
    { number: 120, dateRange: 'June 1 – June 7, 2025' },
    { number: 119, dateRange: 'May 25 – May 31, 2025' },
    { number: 118, dateRange: 'May 18 – May 24, 2025' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              XDC Weekly
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The XDC Weekly is a short weekly video and written description of the previous week's highlights and happenings on XDC Network.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Episodes Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {episodes.map((episode, index) => (
              <motion.a
                key={episode.number}
                href="#"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative bg-gradient-to-br from-teal-500 to-blue-600 h-48 flex items-center justify-center">
                  <div className="text-center text-white">
                    <PlayIcon className="h-16 w-16 mx-auto mb-4 opacity-80 group-hover:opacity-100 transition-opacity" />
                    <span className="text-sm opacity-80">Episode Cover</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-white font-semibold">EP {episode.number}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Episode {episode.number} XDC Weekly {episode.dateRange}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Weekly highlights and happenings on XDC Network
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center gap-2"
          >
            <span className="text-gray-500 mr-4">2/14</span>
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                className={`px-3 py-1 rounded ${
                  page === 2 ? 'bg-teal-500 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}
            <span className="text-gray-500 mx-2">…</span>
            <button className="px-3 py-1 rounded text-gray-700 hover:bg-gray-100">14</button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-8"
          >
            Heard enough? Start building with XDC today
          </motion.h2>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get started with XDC
          </motion.button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg mb-6">
              Sign up for important XDC Network announcements & developments at XDC Foundation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
              <button className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default XDCWeekly;