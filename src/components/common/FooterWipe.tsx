import { useState } from 'react';

export default function FooterWithHoverWipe() {
  const [hovering, setHovering] = useState(false);

  return (
    <footer
      // 1️⃣ group class for descendant group-hover utilities
      className="group relative bg-[#DBE6EB] text-[#131619] overflow-hidden"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* 2️⃣ black overlay (same as before) */}
      <div
        className="absolute inset-0 bg-black transition-transform duration-700 ease-out"
        style={{ transform: hovering ? 'translateY(0)' : 'translateY(100%)' }}
      />

      {/* 3️⃣ content layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-[clamp(1rem,5vw,3rem)] py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* any text now becomes white on hover */}
          <div>
            <h3 className="font-semibold text-lg mb-4 group-hover:text-white transition-colors">
              ABOUT XDC
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/history" className="group-hover:text-white transition-colors">
                  History
                </a>
              </li>
              <li>
                <a href="/brand" className="group-hover:text-white transition-colors">
                  Brand Assets
                </a>
              </li>
            </ul>
          </div>

          {/* repeat the same pattern for every text element */}
          <div>
            <h3 className="font-semibold text-lg mb-4 group-hover:text-white transition-colors">
              RESOURCES
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/ecosystem" className="group-hover:text-white transition-colors">
                  Ecosystem
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 group-hover:text-white transition-colors">
              USE XDC
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/get-in-touch" className="group-hover:text-white transition-colors">
                  Get in touch
                </a>
              </li>
              <li>
                <a
                  href="https://xdc.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group-hover:text-white transition-colors"
                >
                  XDC.dev
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 group-hover:text-white transition-colors">
              Stay Updated
            </h3>
            <p className="text-sm mb-3 group-hover:text-white transition-colors">
              Sign up for important XDC Network announcements & developments at XDC Foundation.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter email address"
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md
                           group-hover:border-white/50 group-hover:text-white
                           transition-colors"
              />
              <button className="px-4 py-2 text-sm bg-[#9FF3FF] text-[#131619] rounded-md font-semibold">
                Subscribe
              </button>
            </form>
            <div className="mt-4 text-xs space-x-4">
              <a href="/privacy" className="group-hover:text-white transition-colors">
                Privacy
              </a>
              <a href="/pr-support" className="group-hover:text-white transition-colors">
                PR Support
              </a>
              <a href="/forum" className="group-hover:text-white transition-colors">
                Forum
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* bottom band */}
      <div className="relative z-10 bg-[#131619] text-[#9FF3FF] py-4 text-sm">
        <div className="max-w-7xl mx-auto px-[clamp(1rem,5vw,3rem)] flex flex-col sm:flex-row justify-between items-center">
          <span className="group-hover:text-white transition-colors">
            © {new Date().getFullYear()} xdc.org
          </span>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <a href="/" className="group-hover:text-white transition-colors">
              What is a blockchain?
            </a>
            <a href="/explore" className="group-hover:text-white transition-colors">
              Explore the Network
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
