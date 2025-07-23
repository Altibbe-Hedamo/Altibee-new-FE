import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Ecosystem = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedSort, setSelectedSort] = useState('Title A-Z');

  const filterOptions = [
    { name: 'All', count: 175 },
    { name: 'AI', count: 2 },
    { name: 'Alliances', count: 18 },
    { name: 'DeFi', count: 27 },
    { name: 'Exchanges', count: 41 },
    { name: 'Gaming', count: 6 },
    { name: 'Infrastructure', count: 29 },
    { name: 'Interoperability', count: 9 },
    { name: 'NFT', count: 3 },
    { name: 'Protocol', count: 22 },
    { name: 'RWA', count: 26 },
    { name: 'Trade Finance', count: 19 },
    { name: 'Wallets', count: 19 }
  ];

  const sortOptions = ['Title A-Z', 'Title Z-A'];

  const featuredPartners = [
    {
      name: 'Plug and Play',
      description: 'A global leader in innovation, Plug and Play is passionate about empowering tomorrow\'s technology, connecting change-makers, and leading organizations to create positive change. Their ecosystem unlocks new opportunities, drives growth, and fosters a culture of innovation.',
      logo: '/api/placeholder/120/60'
    },
    {
      name: 'Tradeteq',
      description: 'Tradeteq\'s marketplace for private credit and real assets, workflow automation, and Securitisation-as-a-Service, is at the heart of what they do. They deliver products that help asset sellers and investors make better decisions, work smarter, and be more efficient. Tradeteq is a member of the World Economic Forum, the Trade Finance Distribution Initiative and International Trade and Forfaiting Association.',
      logo: '/api/placeholder/120/60'
    },
    {
      name: 'Ankr',
      description: 'Through an extensive network of RPCs and APIs, Ankr provides streamlined access to a global network of nodes running on multiple blockchains. They offer leading performance, including complete rollup and sidechain creation, seamless staking experiences and integrations.',
      logo: '/api/placeholder/120/60'
    }
  ];

  // Mock ecosystem projects (in a real app, this would be filtered based on selectedFilter)
  const ecosystemProjects = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    name: `Project ${i + 1}`,
    logo: `/api/placeholder/80/80`,
    category: filterOptions[Math.floor(Math.random() * filterOptions.length)].name
  }));

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              XDC Network – <span className="text-teal-600">Stronger together</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Thanks to the impact of the network's developer community, an increasing number of affiliations, use cases and services, and a host of exchange, wallet and protocol integrations, the XDC Network maintains a diverse and evolving ecosystem.
            </p>
            <p className="text-sm text-gray-500 max-w-3xl mx-auto">
              Statements regarding these projects were sourced through or provided by an associated third party. XDC Foundation does not attest to their accuracy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Participants */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Featured Participants
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="bg-gray-100 rounded-lg h-16 mb-6 flex items-center justify-center">
                  <span className="text-gray-500 font-medium">{partner.name}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{partner.name}</h3>
                <p className="text-gray-600 leading-relaxed">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter and Sort */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between"
          >
            <div className="flex-1">
              <span className="font-medium text-gray-700 mb-3 block">Filter:</span>
              <div className="flex flex-wrap gap-2">
                {filterOptions.map((option) => (
                  <button
                    key={option.name}
                    onClick={() => setSelectedFilter(option.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedFilter === option.name
                        ? 'bg-teal-500 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    {option.name} ({option.count})
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

      {/* Ecosystem Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {ecosystemProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="bg-gray-100 rounded-lg h-20 mb-3 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <span className="text-gray-500 text-sm font-medium">{project.name}</span>
                </div>
                <p className="text-xs text-gray-600 text-center">{project.category}</p>
              </motion.div>
            ))}
          </div>
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

export default Ecosystem;