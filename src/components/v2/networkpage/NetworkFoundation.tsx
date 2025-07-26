// src/components/sections/NetworkFoundation.tsx

import Button from "./Button";

const NetworkFoundation = () => (
  <section className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <svg viewBox="0 0 410 683" className="w-full h-auto">
          <path fill="#FFE5E8" d="M303.282 0c-44.157 0-82.049 26.859-98.28 65.152…Z" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <canvas className="w-4/5 h-auto bg-slate-800 rounded-lg" width={634} height={758} />
        </div>
      </div>
      <div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          XDC <em>Network</em>
        </h2>
        <Button href="https://xinfin.org/" fill>
        
          Visit the XinFin Website
        </Button>
        <Button href="/get-in-touch" fill className="ml-4">
          Consult XDC Foundation
        </Button>
      </div>
    </div>
  </section>
);
export default NetworkFoundation;