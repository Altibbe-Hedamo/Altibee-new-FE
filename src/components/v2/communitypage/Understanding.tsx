// src/components/v2/communitypage/Understanding.tsx
'use client';
import { useEffect, useRef } from 'react';

export default function Understanding() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const line2Ref = useRef<HTMLParagraphElement>(null);
  const line3Ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const els = [headingRef.current, line2Ref.current, line3Ref.current].filter(
      Boolean
    ) as HTMLElement[];
    els.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.9s ease-out, transform 0.9s ease-out';
    });
    els.forEach((el, idx) =>
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, idx * 200)
    );
  }, []);

  return (
 <section className="py-20 px-6 bg-white">
  {/* normal, constrained heading */}
  <div className="max-w-3xl text-left my-12">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
      Understanding the<br />
      <em className="not-italic">heartbeat behind the network</em>
    </h2>
  </div>

  {/* FULL-WIDTH purple bar */}
  <div className="mt-6 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-purple-100 text-black text-base md:text-lg font-medium px-6 py-4 h-full">
    <div className="max-w-3xl mx-auto text-left py-12">
      XDC’s global community existed for years before XDC Foundation’s inception in 2021. The heartbeat of the
XDC Network consists of its developers, content creators, validators, stakeholders, enterprises and
affiliated organizations.

    </div>
  </div>

</section>
  );
}