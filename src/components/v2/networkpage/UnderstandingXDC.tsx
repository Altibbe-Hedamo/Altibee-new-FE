// src/components/sections/UnderstandingXdc.tsx

import Button from "./Button";

const UnderstandingXdc = () => (
  <section className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Understanding <em>XDC 2.0</em>
        </h2>
        <p className="text-lg leading-relaxed">
          XDC 2.0 is the next-generation consensus protocol… based on Chained HotStuff…
        </p>
      </div>
      <div>
        <p className="text-lg leading-relaxed">
          Only masternodes who have locked… advanced forensics detection…
        </p>
        <Button href="https://discord.com/invite/MFeHJ6C5gn" fill>
          Join the XDC Community Discord Server
        </Button>
      </div>
    </div>
  </section>
);
export default UnderstandingXdc;