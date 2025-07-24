/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
       fontFamily: {
        sans: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      boxShadow: {
      'mono': '-4px 4px 0 0 rgba(0,0,0,0.15)',
      'mono-lg': '-6px 6px 0 0 rgba(0,0,0,0.15)',
    },
    },
  },
  plugins: [],
};
