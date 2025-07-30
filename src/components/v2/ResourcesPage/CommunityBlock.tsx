// src/components/build/CommunityBlock.jsx
import ArrowButton from "../../common/ArrowButton";

export default function CommunityBlock() {
  return (
    <section className="bg-white">
      {/* full-width flex container (no inner padding) */}
      <div className="flex flex-col md:flex-row">
        {/* 1) LEFT : image always 50 %, no gaps */}
        <div className="w-full md:w-1/2">
          <img
            src="https://images.prismic.io/xdcf/d024779d-daec-4c62-bb65-76f67868cdfd_chess.jpeg?auto=compress,format"
            alt="Community"
            className="w-full h-full object-cover min-h-[50vh] md:min-h-0"
          />
        </div>

        {/* 2) RIGHT : content, vertically centred */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 py-20 space-y-6">
          <h2 className="text-3xl font-semibold">
            Grow your project <em className="text-black font-extrabold">on XDC Network</em>
          </h2>
          <p className="text-gray-700">
            Whether your project has been up and running for some time or it’s in the
            dream stage, we want to be a resource for you wherever you are…
          </p>

          <div className="flex flex-col space-y-4">
            <ArrowButton href="https://forms.gle/8qPanSJZcUADJ8CHA">
              Request PR support
            </ArrowButton>
            <ArrowButton href="/get-in-touch">
              Consult XDC Foundation
            </ArrowButton>
            <ArrowButton href="https://www.xdc.dev/">
              Developer Forum
            </ArrowButton>
            <ArrowButton href="https://codedamn.com/learn/xdc-workshop">
              XDC Masterclass
            </ArrowButton>
          </div>
        </div>
      </div>
    </section>
  );
}