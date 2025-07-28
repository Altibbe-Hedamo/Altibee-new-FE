import BuildHero from "../../components/v2/buildpage/BuildHero";
import CommunitySection from "../../components/v2/buildpage/CommunitySection";
import DeveloperResources from "../../components/v2/buildpage/DeveloperResources";
import FooterCTA from "../../components/v2/buildpage/FooterCTA";
import StartBuildingSection from "../../components/v2/buildpage/StartBuildingSection";

export default function BuildPage() {
  return (
    <div className="bg-white">
      <BuildHero />
      <StartBuildingSection />
      <DeveloperResources />
      <CommunitySection />
      <FooterCTA />
    </div>
  );
}