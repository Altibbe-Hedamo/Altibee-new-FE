'use client';
import { useScrollAnimation, useScrollAnimationRight } from '../../../hooks/useScrollAnimation';

export default function SolutionsHero() {
  const headingRef = useScrollAnimation({ delay: 0 });
  const taglineRef = useScrollAnimationRight({ delay: 0.2 });

  return (
    <section className="w-full min-h-[80vh] mb-4 mt-12">
      <div className="max-w-7xl mx-auto px-4 pt-10">
        {/* TOP-LEFT CORNER TEXT */}
        <div className="text-left mb-24 p-2">
          <h1
            ref={headingRef}
            className="heading-main text-5xl md:text-7xl"
          >
            Reap the rewards of{' '}
            <em className="not-italic ">blockchain-based innovation</em>
          </h1>
          <p
            ref={taglineRef}
            className="mt-6 max-w-3xl body-text text-lg md:text-xl pt-12"
          >
            The XDC Ecosystem has developed roots across industries. As the technology
            reaches new markets, opportunities emerge for users to interact and exchange
            with a diverse selection of network participants.
          </p>
        </div>

        {/* FULL-WIDTH HERO IMAGE with wavy top */}
        <div className="w-full max-h-[60vh] overflow-hidden">
          <svg viewBox="0 0 800 400" className="w-full h-full">
            <defs>
              <clipPath id="wavyCornersSolutions" clipPathUnits="userSpaceOnUse">
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
              clipPath="url(#wavyCornersSolutions)"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}