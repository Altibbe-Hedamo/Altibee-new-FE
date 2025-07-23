import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const About = () => {
  const foundationRoles = [
    'Encourage development on the XDC Network',
    'Generate awareness for the network as a premier destination to build blockchain-based decentralized applications',
    'Engage competent third parties to assess, evaluate, and support ecosystem infrastructure',
    'Aggregate decentralized community voices and cover initiatives that highlight the XDC Network\'s global usage and impact'
  ];

  const adoptionAreas = [
    {
      title: 'Asset Tokenization',
      description: 'Platforms on the XDC Network can transform off-chain assets into digital tokens, providing enhanced liquidity, fractional ownership, unique access keys, and efficient exchange, to name a few.'
    },
    {
      title: 'Bridges, ISO 20022, and Other Enterprise Use Cases',
      description: 'The XDC Network is host to multiple bridges projects that connect XDC to other blockchain networks. Additionally, the network supports ISO 20022 messaging standards, enabling fast, scalable, and secure rails for financial messaging.'
    },
    {
      title: 'Voting',
      description: 'XDC\'s blockchain can record votes on a public ledger, providing transparency and immutability for governance processes. READ below about a Voting dApp in development with XDC Community.'
    },
    {
      title: 'Developing Marketplace',
      description: 'The XDC Ecosystem is evolving into a business-to-business marketplace where enterprises can discover and integrate blockchain solutions. With diverse participants and use cases, there is a wide range of support across the XDC Network.'
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
              XDC Mainnet – A History of Performance
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Since its origins in 2017, the XDC Network has seen a distributed community of developers, early adopters and advocates serve as champions for the adoption of XDC's blockchain technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* XDC Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">XDC – The Vision</h2>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center text-teal-600 font-semibold mb-8 hover:text-teal-700 transition-colors"
            >
              Visit the XinFin Website
              <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
            </motion.a>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                As an open source enterprise-grade blockchain, XDC Network was designed to support those using DLT technology to more efficiently store and exchange data, assets, and ideas through decentralized applications and enforceable smart contracts.
              </p>
              <p>
                XinFin Fintech's vision for an enterprise-grade blockchain network began with a solid technical foundation and a sustainable route towards decentralized participation. This vision has since inspired distributed innovation and adoption. A decentralized community with diverse contributions create major opportunities for network adoption.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Foundation Role */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg text-gray-700 leading-relaxed"
          >
            <p>
              XDC Foundation works to support the XDC Ecosystem, where XDC Network's open source technology is adopted for many diverse use cases. A community-driven initiative, the Foundation was formed in the middle of 2021 to support the growth, development and adoption of the XDC Network by collaborating with an informed and active collective of developers, world trade experts and content creators using the XDC Network.
            </p>
            <p>
              XDC Foundation is an independent community-focused entity that was created through a grant from XinFin to promote and support ecosystem development across the network.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">The primary role of the Foundation:</h3>
            <ul className="space-y-4">
              {foundationRoles.map((role, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">{role}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center mt-8 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              READ: DAO of CHAIN
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* How XDC can help your business */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">How XDC Network can help your business</h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-12">
              <p>
                XDC Foundation works to support the XDC Ecosystem, where XDC Network's open source technology is adopted for many diverse use cases. XDC Foundation was formed in 2021 to support the XDC Network by engaging with ecosystem participants and aggregating key information about the network. It represents a true community-driven initiative.
              </p>
              <p>
                The foundation supports all areas of adoption on the network. These are some that have emerged as solid performers:
              </p>
            </div>

            <div className="space-y-8">
              {adoptionAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-l-4 border-teal-500 pl-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{area.description}</p>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="border-l-4 border-teal-500 pl-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">Consult XDC Foundation</h3>
                <p className="text-gray-700 leading-relaxed">
                  For businesses looking to explore blockchain solutions, XDC Foundation offers consultation services to help identify the best approaches for your specific use case.{' '}
                  <a href="#" className="text-teal-600 hover:text-teal-700 font-semibold">
                    Contact us to learn more
                  </a>
                  .
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Banner */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8">
              How XDC has proved itself a pioneer in the RWA movement and beyond
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-teal-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              READ NOW
            </motion.button>
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

export default About;