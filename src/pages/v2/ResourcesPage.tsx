import ResourcesHero from '../../components/v2/ResourcesPage/ResourcesHero'
import EvmCompatible from '../../components/v2/ResourcesPage/EvmCompatible'
import LearnMore from '../../components/v2/ResourcesPage/LearnMore'
import Web3Section from '../../components/v2/ResourcesPage/Web3Section'
import Whitepapers from '../../components/v2/ResourcesPage/Whitpapers'
import CommunityBlock from '../../components/v2/ResourcesPage/CommunityBlock'
import BrandAssets from '../../components/v2/ResourcesPage/BrandAssets'


export default function ResourcesPage() {
  return (
    <>
  
      <main className="bg-brand-bg text-brand-text">
        <ResourcesHero />
        <EvmCompatible />
        <LearnMore />
        <Web3Section />
        <Whitepapers />
        <CommunityBlock />
        <BrandAssets />
      </main>
    </>
  )
}