// components/GlobalFooter.tsx
import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const GlobalFooter = () => {
  return (
    <footer className="bg-[#DBE6EB] text-[#131619]">
      {/* top band */}
      <div className="max-w-7xl mx-auto px-[clamp(1rem,5vw,3rem)] py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — ABOUT XDC */}
          <div>
            <h3 className="font-semibold text-lg mb-4">ABOUT XDC</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/history" className="hover:underline">History</a></li>
              <li><a href="/brand" className="hover:underline">Brand Assets</a></li>
            </ul>
          </div>

          {/* Column 2 — RESOURCES */}
          <div>
            <h3 className="font-semibold text-lg mb-4">RESOURCES</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/ecosystem" className="hover:underline">Ecosystem</a></li>
              <li><a href="/disclaimer" className="hover:underline">Disclaimer & Terms of Use</a></li>
            </ul>
          </div>

          {/* Column 3 — USE XDC */}
          <div>
            <h3 className="font-semibold text-lg mb-4">USE XDC</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/get-in-touch" className="hover:underline">Get in touch</a></li>
              <li><a href="https://xdc.dev" target="_blank" rel="noopener noreferrer" className="hover:underline">XDC.dev</a></li>
            </ul>
          </div>

          {/* Column 4 — Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-sm mb-3">Sign up for important XDC Network announcements & developments at XDC Foundation.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter email address"
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md"
              />
              <button className="px-4 py-2 text-sm bg-[#9FF3FF] text-[#131619] rounded-md font-semibold">
                Subscribe
              </button>
            </form>
            <div className="mt-4 text-xs space-x-4">
              <a href="/privacy" className="hover:underline">Privacy Policy</a>
              <a href="/pr-support" className="hover:underline">Project PR Support</a>
              <a href="/forum" className="hover:underline">XDC Network Forum</a>
            </div>
          </div>
        </div>
      </div>

      {/* bottom utility links */}
      <div className="bg-[#131619] text-[#9FF3FF] py-4 text-sm">
        <div className="max-w-7xl mx-auto px-[clamp(1rem,5vw,3rem)] flex flex-col sm:flex-row justify-between items-center">
          <span>© {new Date().getFullYear()} xdc.org</span>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <a href="/" className="hover:underline">What is a blockchain?</a>
            <a href="/explore" className="hover:underline">Explore the Network</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;