// src/components/sections/WhyCarousel.tsx
import React, { useState } from 'react';
import Button from './Button';

const slides = [
  "Success depends on your network",
  "Network Security",
  "RWA Tokenization Focus",
  "EVM Compatible",
  "Trade Finance-focused dApps",
  "Subnets",
  "Onboarding Process",
  "Long-term Vision",
  "Reliably Fast & Efficient",
  "Sustainable",
  "MLETR",
  "XDC Payments and ISO 20022"
];

const WhyCarousel = () => {
  const [idx, setIdx] = useState(0);
  return (
    <section className="py-24 bg-[#131619] text-[#9FF3FF]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Why Choose <em>XDC Network</em>
        </h2>
        <p className="text-2xl mb-4">{slides[idx]}</p>
        <div className="flex gap-4 mt-8">
          <Button onClick={()=>setIdx((idx-1+slides.length)%slides.length)}>&larr;</Button>
          <Button onClick={()=>setIdx((idx+1)%slides.length)}>&rarr;</Button>
        </div>
      </div>
    </section>
  );
};
export default WhyCarousel;