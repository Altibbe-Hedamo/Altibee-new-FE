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
      },
      fontFamily: {
        // editorial: ['Editorial New', 'serif'],
        // sans: ['Untitled Sans', 'system-ui', 'sans-serif'],
         serif: ['Elyanor', 'serif'],
         sans: ['system-ui', 'sans-serif'],
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
