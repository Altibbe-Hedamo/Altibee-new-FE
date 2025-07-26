// pages/HomePage.tsx
import React from 'react';
import Hero from '../../components/v2/Homepage/Hero';
// import SmoothWrapper from '../components/SmoothWrapper';
// import SplitScreenIntro from '../components/SplitScreenIntro';
import LiveMainnetBanner from '../../components/LiveMainnetBanner';
import WhatsHappening from '../../components/WhatsHappening';
import GlobalFooter from '../../components/common/GlobalFooter';
import SmoothWrapper from '../../components/common/SmoothWrapper';
import SplitScreenIntro from '../../components/v2/Homepage/SplitScreenIntro';
import FooterWithHoverWipe from '../../components/common/FooterWipe';
import XDCSection from '../../components/v2/Homepage/XDCSection';
import PoweredBy from '../../components/v2/Homepage/PoweredBy';
import FeatureSplit from '../../components/v2/Homepage/XDCSection';
import BuildSection from '../../components/v2/buildpage/BuildSection';
import XDCIntroSection from '../../components/v2/Homepage/XDCSection';
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