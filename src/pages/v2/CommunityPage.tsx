import CommunityHero from "../../components/v2/communitypage/CommunityHero";
import Contribute from "../../components/v2/communitypage/Contribute";
import Podcast from "../../components/v2/communitypage/Podcast";
import Quote from "../../components/v2/communitypage/Quote";
import Understanding from "../../components/v2/communitypage/Understanding";
import Ecosystem from "../Ecosystem";

export default function CommunityPage() {
  return (
    <>
    
      <main className="bg-surface text-brand">
        <CommunityHero />
        <Understanding />
        <Ecosystem />
        <Contribute />
        <Podcast />
        <Quote />
      </main>
    </>
  )
}