import Navbar from "../../components/Navbar";
import BuildHero from "../../components/v2/buildpage/BuildHero";
import CommunitySection from "../../components/v2/buildpage/CommunitySection";
import DeveloperResources from "../../components/v2/buildpage/DeveloperResources";
import EcosystemSection from "../../components/v2/buildpage/Ecosystem";
import FooterCTA from "../../components/v2/buildpage/FooterCTA";
import StartBuildingSection from "../../components/v2/buildpage/StartBuildingSection";

export default function BuildPage() {
  return (
    <div className="">
      <Navbar className="bg-transparent backdrop-none shadow-none text-black"/>
      <BuildHero />
      <StartBuildingSection />
      <DeveloperResources />  
      <EcosystemSection />
      <CommunitySection />
      <FooterCTA />
    </div>
  );
}