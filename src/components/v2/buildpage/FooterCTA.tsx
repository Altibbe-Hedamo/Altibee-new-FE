// src/components/build/FooterCTA.jsx
export default function FooterCTA() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Heard enough? <br />
          Start building with XDC today
        </h2>
        <a
          href="/build"
          className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200"
        >
          Get started with XDC
        </a>
      </div>
    </section>
  );
}