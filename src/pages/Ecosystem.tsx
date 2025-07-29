// src/components/v2/communitypage/Ecosystem.tsx
import React from 'react';
import ArrowButton from '../components/common/ArrowButton';

export default function Ecosystem() {
  return (
    <section className="w-full bg-white">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* LEFT: text + CTA */}
        <div className="md:w-1/2 flex flex-col justify-center px-6 lg:px-16 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            XDC<br />Ecosystem
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            The XDC Network maintains a robust, diverse and evolving ecosystem.
            Because participants trust in the network's performance, they can
            focus on content creation, business strategy and growth.
          </p>

          <div className="mt-8">
            <ArrowButton href="/ecosystem" classname='px-12'>
            Explore Ecosystem
            </ArrowButton>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Contribute</h2>
            <p className="text-gray-700 leading-relaxed">
              The XDC community includes a global network of individuals with
              different skills contributing to the ecosystem's growth. Each
              participant can play a role and there are many ways to get involved.
            </p>
          </div>
        </div>

        {/* RIGHT: image */}
        <div className="md:w-1/2 relative min-h-[300px] md:min-h-screen">
          <img
            src="/image.png"
            alt="XDC Ecosystem"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}