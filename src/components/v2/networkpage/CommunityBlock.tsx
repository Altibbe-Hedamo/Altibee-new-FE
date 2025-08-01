// src/components/sections/CommunityBlock.tsx

import Button from "./Button";

const CommunityBlock = () => (
      <section className="bg-accent-sage py-24">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div className="bg-slate-300 aspect-square rounded-xl" />
      <div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          The Community <em>Driving the Network</em>
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          The steep adoption curve… creativity to apply unique expertise…
        </p>
        <div className="flex flex-wrap gap-4">
          <Button href="/resources?target=tutorials">Learning XDC</Button>
          <Button href="https://docs.xdc.community/learn/community-support" fill>
            Join the XDC community
          </Button>
          <Button href="/case-studies/dao-of-chain">Our Philosophy</Button>
        </div>
      </div>
    </div>
  </section>
);
export default CommunityBlock;