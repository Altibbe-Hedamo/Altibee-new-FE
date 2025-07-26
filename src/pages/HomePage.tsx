// pages/HomePage.tsx
import React from 'react';
import Hero from '../components/Hero';
// import SmoothWrapper from '../components/SmoothWrapper';
// import SplitScreenIntro from '../components/SplitScreenIntro';
import PoweredBy from '../components/PoweredBy';
import LiveMainnetBanner from '../components/LiveMainnetBanner';
import WhatsHappening from '../components/WhatsHappening';
import GlobalFooter from '../components/common/GlobalFooter';
import SmoothWrapper from '../components/common/SmoothWrapper';
import SplitScreenIntro from '../components/v2/SplitScreenIntro';
import FooterWithHoverWipe from '../components/common/FooterWipe';
import ClothWrapper from '../components/common/ClothWrapper';
// import FooterWipe from '../components/common/FooterWipe';

export default function HomePage() {
  return (
    <div className="font-mono">
        
    <Hero />
    <div className=" relative
    z-10">

        <SmoothWrapper />
        <SplitScreenIntro />
        <PoweredBy />
        <LiveMainnetBanner />
        {/* <WhatsHappening /> */}
        {/* <GlobalFooter /> */}
      <FooterWithHoverWipe />
    </div>
    </div>
  );
}