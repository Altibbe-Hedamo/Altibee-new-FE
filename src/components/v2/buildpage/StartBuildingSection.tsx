// src/components/build/StartBuildingSection.jsx
export default function StartBuildingSection() {
  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">Start Building</h2>
          <p className="text-gray-700 mb-6">
            Build with confidence and harness the capabilities of blockchain technology with the XDC Network.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">
            WATCH: Launch a Subnet on XDC Network
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card title="Resources" desc="This is a great place to get started." />
          <Card title="Subnets" desc="Quickly deploy your own sovereign blockchain." />
        </div>
      </div>
    </section>
  );
}

function Card({ title, desc }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{desc}</p>
      <button className="text-sm underline hover:text-blue-600">Learn more →</button>
    </div>
  );
}