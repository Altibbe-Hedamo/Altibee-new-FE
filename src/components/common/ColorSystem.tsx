// Color System Reference Component
// This component demonstrates the new organic color system

export default function ColorSystemDemo() {
  return (
    <div className="p-8 space-y-8 bg-organic-bg">
      <h1 className="heading-main">Organic Color System</h1>
      
      {/* Primary Colors */}
      <div>
        <h2 className="heading-section mb-4">Primary Colors (Organic Green)</h2>
        <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
          {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
            <div key={shade} className="text-center">
              <div 
                className={`w-full h-16 rounded mb-2 bg-primary-${shade}`}
              />
              <span className="text-xs">{shade}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary Colors */}
      <div>
        <h2 className="heading-section mb-4">Secondary Colors (Earthy Brown)</h2>
        <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
          {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
            <div key={shade} className="text-center">
              <div 
                className={`w-full h-16 rounded mb-2 bg-secondary-${shade}`}
              />
              <span className="text-xs">{shade}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Accent Colors */}
      <div>
        <h2 className="heading-section mb-4">Accent Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="text-center">
            <div className="w-full h-16 rounded mb-2 bg-accent-peach"></div>
            <span className="text-sm">Peach</span>
          </div>
          <div className="text-center">
            <div className="w-full h-16 rounded mb-2 bg-accent-mint"></div>
            <span className="text-sm">Mint</span>
          </div>
          <div className="text-center">
            <div className="w-full h-16 rounded mb-2 bg-accent-lavender"></div>
            <span className="text-sm">Lavender</span>
          </div>
          <div className="text-center">
            <div className="w-full h-16 rounded mb-2 bg-accent-sage"></div>
            <span className="text-sm">Sage</span>
          </div>
          <div className="text-center">
            <div className="w-full h-16 rounded mb-2 bg-accent-cream"></div>
            <span className="text-sm">Cream</span>
          </div>
        </div>
      </div>

      {/* Typography Examples */}
      <div>
        <h2 className="heading-section mb-4">Typography Examples</h2>
        <div className="space-y-4">
          <h1 className="heading-main">Main Heading (Merriweather)</h1>
          <h2 className="heading-section">Section Heading (Merriweather)</h2>
          <h3 className="heading-sub">Sub Heading (Montserrat)</h3>
          <p className="body-text">Body text using Poppins font family. This demonstrates the readable text style for content.</p>
          <button className="button-text bg-primary-600 text-white px-6 py-3 rounded-lg">Button Text (Montserrat)</button>
          <p className="tagline-text">Tagline text in italic Merriweather</p>
          <p className="footer-text">Footer text in smaller Poppins</p>
        </div>
      </div>

      {/* Usage Guide */}
      <div>
        <h2 className="heading-section mb-4">Usage Guide</h2>
        <div className="body-text space-y-2">
          <p><strong>Primary Colors:</strong> Use for main brand elements, buttons, links</p>
          <p><strong>Secondary Colors:</strong> Use for warm accents, highlights</p>
          <p><strong>Neutral Colors:</strong> Use for text, borders, backgrounds</p>
          <p><strong>Accent Colors:</strong> Use sparingly for special callouts</p>
        </div>
      </div>
    </div>
  );
}