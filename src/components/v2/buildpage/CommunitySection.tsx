// src/components/build/CommunitySection.jsx
import ArrowButton from "../../common/ArrowButton";

export default function CommunitySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        {/* 🖼️ 1) TRUE left half – always 50 % */}
        <div className="w-1/2 hidden md:block">
          <img
            src="https://images.prismic.io/xdcf/d024779d-daec-4c62-bb65-76f67868cdfd_chess.jpeg?auto=compress,format"
            alt="Community"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 🎯 2) Right half – vertical stack of ArrowButtons */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 space-y-6">
          <h2 className="text-3xl font-semibold">
            Grow your project <em className="text-black font-extrabold">on XDC Network</em>
          </h2>
          <p className="text-gray-700">
            Whether your project is live or in the dream stage, we’re here to help.
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
          </div>
        </div>
      </div>
    </section>
  );
}