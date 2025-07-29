const logos = [
  'https://images.prismic.io/xdcf/16a750f2-0f0a-4d63-bcc9-96d1d253547f_Kinesis.png?auto=compress,format',
  'https://images.prismic.io/xdcf/aBdcLPIqRLdaB2fh_layerzerologo.png?auto=format,compress',
  'https://images.prismic.io/xdcf/d8a72da8-c67d-4e76-8449-6c07e116b130_Plugin+Decentralized+Oracle.png?auto=compress,format',
  'https://images.prismic.io/xdcf/71a40606-3540-4f71-99c2-6fa9cebc2c44_Comtech_Gold.png?auto=compress,format',
  'https://images.prismic.io/xdcf/aBddYvIqRLdaB2fr_Archaxlogo.png?auto=format,compress',
  'https://images.prismic.io/xdcf/ff4fecbd-fd27-44df-86a1-9c2d2c3807d0_Tradeteq_170x58b_w_.png?auto=format,compress',
];

export default function Participants() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">XDC Participants</h2>
        <div className="flex flex-wrap justify-center items-center gap-10 grayscale">
          {logos.map((src) => (
            <img key={src} src={src} alt="" className="h-12 object-contain" />
          ))}
        </div>
      </div>
    </section>
  );
}