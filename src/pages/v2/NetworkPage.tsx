import FooterWithHoverWipe from "../../components/common/FooterWipe";
import CommunityBlock from "../../components/v2/networkpage/CommunityBlock";
import NetworkFoundation from "../../components/v2/networkpage/NetworkFoundation";
import NetworkHero from "../../components/v2/networkpage/NetworkHero";
import Stats from "../../components/v2/networkpage/Stats";
import UnderstandingXdc from "../../components/v2/networkpage/UnderstandingXDC";
import WhyCarousel from "../../components/v2/networkpage/WhyCarousel";


export default function NetworkPage() {
  return (
    <>
      <NetworkHero />
      <Stats />
      <WhyCarousel />
      <UnderstandingXdc />
      <CommunityBlock />
      <NetworkFoundation />
      <FooterWithHoverWipe />
    </>
  );
}