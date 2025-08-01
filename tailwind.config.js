/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#F8FBFC',
        'brand-text': '#131619',
        'brand-accent': '#FFBFAB',
        'brand-button': '#FFBFAB',
        // PDF-inspired color palette
        'wellness-green': '#2d5a3d',
        'wellness-green-light': '#4a7c59',
        'wellness-text': '#4a5568',
        'wellness-text-light': '#718096',
        'wellness-bg': '#f7fafc',
      },
      fontFamily: {
        // Primary fonts from PDF pattern
        'montserrat': ['Montserrat', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        // Legacy fonts (keeping for backward compatibility)
        serif: ['Elyanor', 'Merriweather', 'serif'],
        sans: ['Poppins', 'Montserrat', 'system-ui', 'sans-serif'],
      },
       animation: {
        'fade-in': 'fadeIn .3s ease-out',
        'slide-in': 'slideIn .2s ease-out',
      },
      boxShadow: {
      'mono': '-4px 4px 0 0 rgba(0,0,0,0.15)',
      'mono-lg': '-6px 6px 0 0 rgba(0,0,0,0.15)',
    },
     keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-4px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },

  },
  plugins: [],
};
