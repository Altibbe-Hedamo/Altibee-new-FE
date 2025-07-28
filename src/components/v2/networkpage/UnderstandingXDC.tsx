// UnderstandingXdc.tsx
import ArrowButton from "../../common/ArrowButton";

const UnderstandingXdc = () => (
  <section className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-x-12 gap-y-8 items-start">
      {/* Left column ----------------------------------------------------- */}
      <div className="space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-16 mr-24">
          Understanding <em className="not-italic">XDC 2.0</em>
        </h2>

        <p className="text-lg leading-relaxed">
          XDC 2.0 is the next-generation
          <br />
          consensus protocol originally built
          <br />
          for the XDC Network. It is based on
          <br />
          <strong>Chained HotStuff</strong>, the state-of-the-art
          <br />
          BFT (Byzantine fault tolerance)
          <br />
          consensus algorithm.
        </p>
      </div>

      {/* Right column ---------------------------------------------------- */}
      <div className="space-y-4">
        <p className="text-lg leading-relaxed">
          Only masternodes who have locked a significant amount of
          <br />
          XDC tokens have the right to propose and vote for blocks. The
          <br />
          locked tokens will be slashed if the master nodes conduct any
          <br />
          malicious behavior, and the malicious behavior detection is
          <br />
          guaranteed by the network's advanced forensics detection
          <br />
          and monitoring system.
        </p>

        <ArrowButton href="/resources?target=tutorials">
          Join the XDC Community Discord Server
        </ArrowButton>
      </div>
    </div>
  </section>
);

export default UnderstandingXdc;