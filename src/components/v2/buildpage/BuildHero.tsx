// src/components/v2/buildpage/BuildHero.tsx
'use client';
import { useEffect, useRef } from 'react';

export default function BuildHero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const els = [headingRef.current, taglineRef.current].filter(Boolean) as HTMLElement[];

    // initial state
    els.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
    });

    // reveal with stagger
    els.forEach((el, idx) =>
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 100 + idx * 150)
    );
  }, []);

  return (
    <section className="bg-gradient-to-br from-yellow-50 to-orange-100 w-full min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 pt-10">
        <div className="text-left mb-24">
          <h1
            ref={headingRef}
            className="text-8xl font-bold text-gray-900"
          >
            Build on XDC
          </h1>
          <p
            ref={taglineRef}
            className="mt-4 text-4xl text-gray-700"
          >
            <em>Create Something Extraordinary</em>
          </p>
        </div>

        {/* full-width hero image */}
       <div className="w-full max-h-[60vh] overflow-hidden">
  <svg viewBox="0 0 800 400" className="w-full h-full">
    <defs>
      <clipPath id="wavyCorners" clipPathUnits="userSpaceOnUse">
        <path d="
          M0,100 
          C40,90 60,60 100,50 
          C140,40 160,10 200,0 
          L600,0 
          C640,10 660,40 700,50 
          C740,60 760,90 800,100 
          L800,400 
          L0,400 
          Z
        " />
      </clipPath>
    </defs>

    <image
      href="/image.png"
      width="800"
      height="400"
      preserveAspectRatio="xMidYMid slice"
      clipPath="url(#wavyCorners)"
    />
  </svg>
</div>

      </div>
    </section>
  );
}