// src/components/build/CommunitySection.jsx
export default function CommunitySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <img
            src="https://images.prismic.io/xdcf/d024779d-daec-4c62-bb65-76f67868cdfd_chess.jpeg?auto=compress,format"
            alt="Community"
            className="rounded-lg shadow"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Grow your project <em>on XDC Network</em>
          </h2>
          <p className="text-gray-700 mb-6">
            Whether your project is live or in the dream stage, we’re here to help.
          </p>
          <div className="space-y-3">
            <a href="https://forms.gle/8qPanSJZcUADJ8CHA" className="block underline text-blue-600">Request PR support →</a>
            <a href="/get-in-touch" className="block underline text-blue-600">Consult XDC Foundation →</a>
            <a href="https://www.xdc.dev/" className="block underline text-blue-600">Developer Forum →</a>
          </div>
        </div>
      </div>
    </section>
  );
}