import Navbar from "../../components/Navbar";
import CommunityBlock from "../../components/v2/networkpage/CommunityBlock";
import NetworkFoundation from "../../components/v2/networkpage/NetworkFoundation";
import NetworkHero from "../../components/v2/networkpage/NetworkHero";
import Stats from "../../components/v2/networkpage/Stats";
import UnderstandingXdc from "../../components/v2/networkpage/UnderstandingXDC";
import XDCFoundationSection from "../../components/v2/networkpage/XDCFoundationSection";
// import WhyCarousel from "../../components/v2/networkpage/WhyCarousel";


export default function NetworkPage() {
  return (
    <>
    <Navbar className="bg-white text-black pt-2" />
      <NetworkHero />
      <Stats />
      {/* <WhyCarousel /> */}
      <CommunityBlock />
      <UnderstandingXdc />
      <NetworkFoundation />
      <XDCFoundationSection />
    </>
  );
}