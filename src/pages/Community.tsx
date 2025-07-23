import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Community = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contributeItems = [
    {
      title: "Participate in Community Discussion on XDC.dev",
      description: "Join developers and community members in technical discussions",
      link: "#"
    },
    {
      title: "Get emails about upcoming XDC events",
      description: "Stay informed about conferences, meetups, and community events",
      link: "#"
    },
    {
      title: "Track what's happening on XDC Voting Dapp",
      description: "Participate in governance and community decision making",
      link: "#"
    }
  ];

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
              Join a thriving and diverse Community
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Embark on a journey with the XDC Network's enthusiastic early adopters, passionate developers, and the global community, who play an everyday role in the network's usage and adoption.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Understanding the heartbeat */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Understanding the heartbeat behind the network
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                XDC's global community existed for years before XDC Foundation's inception in 2021. The heartbeat of the XDC Network consists of its developers, content creators, validators, stakeholders, enterprises and affiliated organizations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                XDC.org is designed to be a community hub, aggregating key data, community voices and resources. This is a watering hole for all things XDC. Here we will gladly keep you updated and informed.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-xl p-8 h-64 flex items-center justify-center">
              <span className="text-gray-500">Community Illustration</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* XDC Ecosystem */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">XDC Ecosystem</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              The XDC Network maintains a robust, diverse and evolving ecosystem. Because participants trust in the network's performance, they can focus on content creation, business strategy and growth.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Explore Ecosystem
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contribute Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Contribute</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The XDC community includes a global network of individuals with different skills contributing to the ecosystem's growth. Each participant can play a role and there are many ways to get involved.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {contributeItems.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.link}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 hover:bg-gray-100 p-8 rounded-xl transition-all duration-300 block"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center text-teal-600 font-medium">
                  Learn more <ArrowRightIcon className="ml-2 h-4 w-4" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Voices Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Voices on XDC Network</h2>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center text-teal-600 font-semibold text-lg hover:text-teal-700 transition-colors"
            >
              See more news coverage and articles
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-start"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Podcast XDC The Stream</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                It's often difficult to cut through the noise and join discussions about the real-world use of blockchain technology. On XDC The Stream, XDC community members Lance Lilly and Dave Marcus speak with experts around the globe to discuss the history, challenges and technological innovations of blockchain in some of the most impactful industries.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Tune into this monthly podcast to gain insight into how these industries operate and how blockchain technology can make a difference moving forward. Be sure to leave comments or suggestions and let us know industry topics you're interested in learning more about.
              </p>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                XDC The Stream, Episode 16 — 6.10.24
              </motion.a>
              <p className="text-sm text-gray-500 mt-4">
                DISCLOSURE: The content herein represents the individual perspectives of the XDC community members and does not reflect the official stance of the XDC Foundation.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl p-8 text-white">
              <blockquote className="text-lg italic mb-4">
                "We're looking forward to be helping the XDC Network grow its institutional participation across the entire spectrum of the crypto industry… Excitingly, this also opens up access to DeFi's Metaverse, where Trustology can help navigate NFT tokenization, often removed due to fear of counterparty risk."
              </blockquote>
              <cite className="font-semibold">— Trustology – Alex Batlin, Founder and CEO</cite>
            </div>
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

export default Community;