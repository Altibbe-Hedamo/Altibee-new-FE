import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const NewsInsights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedSort, setSelectedSort] = useState('Latest');

  const filterOptions = ['All', 'Featured', 'Insights', 'Media', 'News', 'Reports'];
  const sortOptions = ['Latest', 'Oldest'];

  const posts = [
    {
      tags: ['#tokenization', '#RWA'],
      title: 'Why Tokenization Could Outgrow Bitcoin: Crypto\'s Biggest Success Story',
      author: 'Murtuza J Merchant, Benzinga',
      date: 'Jul 8, 2025'
    },
    {
      tags: ['#RWA', '#tokenization', '#tradefinance'],
      title: 'XDC Network Caps Six Years of Live Mainnet',
      author: 'XDC Foundation',
      date: 'Jun 3, 2025'
    },
    {
      tags: ['#XDC', '#WeAreXDC', '#BuildItOnXDC'],
      title: 'XDC Network Concludes Integration with Utila Enabling Institutional Access to Custody Assets',
      author: 'Chainwire',
      date: 'May 27, 2025'
    },
    {
      tags: ['#BuildItOnXDC', '#RWA', '#WeAreXDC'],
      title: 'XSWAP Protocol Launches Circle\'s Bridged USDC on XDC\'s Network',
      author: 'XSwap Protocol',
      date: 'Mar 3, 2025'
    },
    {
      tags: ['#RWA', 'XDC community', 'Trade Finance', '#XDC', 'XDC 2.0'],
      title: 'XDC boldly brings blockchain to the real world',
      author: 'XDC Foundation',
      date: 'Dec 18, 2024'
    },
    {
      tags: ['#BuildItOnXDC', '#RWA', '#XDC', '#WeAreXDC'],
      title: 'Archax and XDC Network partner to accelerate RWA tokenization',
      author: 'Benson Toti',
      date: 'Dec 5, 2024'
    },
    {
      tags: ['#MetaMask', '#XDC', '#Wallet', '#Web3'],
      title: 'Using MetaMask for XDC',
      author: 'XDC Foundation',
      date: 'Nov 4, 2024'
    },
    {
      tags: ['#XDC', 'XDC 2.0', '#WeAreXDC', 'Web3 accelerator'],
      title: 'How XDC Network projects are shaping the Web3 economy',
      author: 'Blockworks',
      date: 'Oct 22, 2024'
    },
    {
      tags: ['#BuildItOnXDC', '#XDC', 'xdcsubnet'],
      title: 'XDC Subnet Official Release',
      author: 'Wanwiset Peerapatanapokin',
      date: 'Oct 8, 2024'
    }
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
              News & Insights
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our community is made up of many voices - not just XDC Foundation. Read on to hear from the global community and learn about the latest developments across the network. Please note that third party news articles are provided as a resource for our readers. XDC Foundation does not attest to the accuracy of any portion of these articles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Weekly */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center text-white"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6">XDC Weekly July 13 – July 19, 2025</h2>
              <p className="text-xl mb-8 text-teal-100">
                The XDC Weekly is a short weekly video and written description of the previous week's highlights and happenings on XDC Network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-white text-teal-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Watch latest video
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-teal-600 transition-colors"
                >
                  See all episodes
                </motion.button>
              </div>
            </div>
            <div className="bg-white/20 rounded-xl p-8 h-64 flex items-center justify-center">
              <span className="text-white/80">XDC Weekly Cover</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter and Sort */}
      <section ref={ref} className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <span className="font-medium text-gray-700">Filter:</span>
              <div className="flex flex-wrap gap-2">
                {filterOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedFilter(option)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedFilter === option
                        ? 'bg-teal-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-700">Sort:</span>
              <div className="relative">
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  {sortOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-teal-600 text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 line-clamp-3">
                  {post.title}
                </h3>
                <div className="text-sm text-gray-500">
                  <p>{post.author}</p>
                  <p>{post.date}</p>
                </div>
              </motion.article>
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
            <span className="text-gray-500 mr-4">2/13</span>
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
            <button className="px-3 py-1 rounded text-gray-700 hover:bg-gray-100">13</button>
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

export default NewsInsights;