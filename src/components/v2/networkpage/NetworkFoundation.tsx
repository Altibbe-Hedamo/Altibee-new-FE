// src/components/sections/NetworkFoundation.tsx
import ArrowButton from "../../common/ArrowButton";

const NetworkFoundation = () => (
  <section className="relative py-24 bg-white">
    {/* top border */}
    <span className="absolute top-0 left-[12.5%] h-px w-[75%] bg-gray-200" />
    {/* bottom border */}
    <span className="absolute bottom-0 left-[12.5%] h-px w-[75%] bg-gray-200" />

    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <div className="flex flex-col items-start space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          XDC <em className="not-italic">Network</em>
        </h2>

        <p className="text-lg leading-relaxed max-w-md">
          XDC Network participants maintain top-tier relationships across
          industries, conducting cutting-edge research and software development,
          so the XDC Network can be first-to-market with innovative concepts and
          unprecedented use cases.
        </p>

        <ArrowButton
          href="/resources?target=tutorials"
          classname="mt-4"
        >
          Explore XDC Ecosystem
        </ArrowButton>
      </div>
    </div>
  </section>
);

export default NetworkFoundation;