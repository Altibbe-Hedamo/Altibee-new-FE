// LiveMainnetBanner.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function LiveMainnetBanner() {
  return (
    <section
      className="relative w-full min-h-[calc(var(--vh,1vh)*70)] md:min-h-[calc(var(--vh,1vh)*80)] bg-cover bg-center z-10"
      style={{ backgroundImage: "url('/image.png')" }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* text block – top-left */}
      <div className="absolute top-0 left-0 z-10 flex flex-col items-start p-[clamp(1rem,5vw,3rem)]">
        <div className="flex flex-col items-start gap-2 md:gap-3 font-serif text-[#9FF3FF]">
          {/* stacked headlines */}
          <h2 className="text-[clamp(2.25rem,5vw,4rem)] leading-none tracking-tighter">
            The RWA and
          </h2>
          <h2 className="text-[clamp(2.25rem,5vw,4rem)] leading-none tracking-tighter">
            YEARS OF
          </h2>
          <h2 className="text-[clamp(2.25rem,5vw,4rem)] leading-none tracking-tighter">
            trade finance
          </h2>
          <h2 className="text-[clamp(2.25rem,5vw,4rem)] leading-none tracking-tighter">
            MAINNET
          </h2>

          <p className="font-sans text-base md:text-lg mt-2">
            blockchain is steadily building for lasting success
          </p>

          <h3 className="font-serif text-xl md:text-2xl mt-4">
            XDC Network Caps Six Years of Live Mainnet
          </h3>
        </div>

        {/* button – bottom-left */}
        <a
          href="/read-now"
          className="absolute bottom-0 left-0 mb-4 ml-[clamp(1rem,5vw,3rem)] inline-flex items-center font-sans text-[#9FF3FF] text-lg border-b border-[#9FF3FF] pb-1 hover:border-b-2 hover:pb-[2px] transition-all"
        >
          READ NOW
          <ArrowRightIcon className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
}