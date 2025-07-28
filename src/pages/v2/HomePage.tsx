import Hero from '../../components/v2/Homepage/Hero';
import SmoothWrapper from '../../components/common/SmoothWrapper';
import SplitScreenIntro from '../../components/v2/Homepage/SplitScreenIntro';
import PoweredBy from '../../components/v2/Homepage/PoweredBy';
import LiveMainnetBanner from '../../components/v2/Homepage/LiveMainnetBanner';
import Navbar from '../../components/Navbar';

export default function HomePage() {
  return (
    <>
    <Navbar className="bg-[#131619]" />
    <div className="font-mono">
    <Hero />
    <div className=" relative
    z-10">
        <SmoothWrapper />
        <SplitScreenIntro />
        <PoweredBy />
        <LiveMainnetBanner />
    </div>
    </div>
    </>
  );
}