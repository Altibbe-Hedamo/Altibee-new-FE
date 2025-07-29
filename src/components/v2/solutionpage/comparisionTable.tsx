const rows = [
  ['Consensus Algorithm', 'DPoS + Hotstuff BFT', 'Proof-of-Stake', 'Proof-of-Work', 'XRPL Consensus'],
  ['Transactions Per Second', '2,000+', '30', '7', '1,500+'],
  ['Cost per Transaction', '$0.00001', '$2', '$1', '$0.000001'],
  ['Energy Consumption', '0.0000074 TWh', '0.0026 TWh', '71.12 TWh', '0.079 TWh'],
];

export default function ComparisonTable() {
  const headers = ['', 'XDC 2.0', 'Ethereum', 'BTC', 'XRP'];
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Why choose XDC?</h2>
        <p className="text-slate-600 mb-10">How we compare to other popular blockchains.</p>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                {headers.map((h) => (
                  <th key={h} className="py-3 px-4 font-semibold text-sm">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b last:border-none">
                  {row.map((cell, j) => (
                    <td key={j} className="py-3 px-4 text-sm">
                      <span className="whitespace-pre-line">{cell}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}