/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Legacy colors (keeping for backward compatibility)
        'brand-bg': '#F8FBFC',
        'brand-text': '#131619',
        'brand-accent': '#FFBFAB',
        'brand-button': '#FFBFAB',
        
        // Primary Color System - Organic Wellness Theme
        primary: {
          50: '#f0f9f4',   // Lightest organic green
          100: '#dcf4e3',  // Very light green
          200: '#bbead0',  // Light green
          300: '#86d4a6',  // Medium-light green
          400: '#4ade80',  // Medium green
          500: '#22c55e',  // Base green
          600: '#16a34a',  // Dark green
          700: '#15803d',  // Darker green
          800: '#166534',  // Very dark green
          900: '#14532d',  // Darkest green
        },
        
        // Secondary Color System - Earthy Browns
        secondary: {
          50: '#fdf8f3',   // Lightest earth
          100: '#f7e6d3',  // Very light brown
          200: '#f0d0a8',  // Light brown
          300: '#e6b47d',  // Medium-light brown
          400: '#dc9752',  // Medium brown
          500: '#d4853d',  // Base brown
          600: '#b8652a',  // Dark brown
          700: '#9c4a1f',  // Darker brown
          800: '#7c3e1a',  // Very dark brown
          900: '#653318',  // Darkest brown
        },
        
        // Neutral System - Natural Grays
        neutral: {
          50: '#fafafa',   // Pure white
          100: '#f5f5f5',  // Very light gray
          200: '#e5e5e5',  // Light gray
          300: '#d4d4d4',  // Medium-light gray
          400: '#a3a3a3',  // Medium gray
          500: '#737373',  // Base gray
          600: '#525252',  // Dark gray
          700: '#404040',  // Darker gray
          800: '#262626',  // Very dark gray
          900: '#171717',  // Darkest gray
        },
        
        // Accent Colors - Fresh & Organic
        accent: {
          peach: '#ffb4a2',     // Soft peach
          mint: '#a7f3d0',      // Fresh mint
          lavender: '#c4b5fd',  // Soft lavender
          sage: '#d1fae5',      // Sage green
          cream: '#fef3c7',     // Cream yellow
        },
        
        // Specific Use Cases
        'organic-bg': '#f8fffe',      // Background
        'organic-text': '#1f2937',    // Primary text
        'organic-text-light': '#6b7280', // Secondary text
        'organic-border': '#e5e7eb',  // Borders
        'organic-success': '#10b981', // Success states
        'organic-warning': '#f59e0b', // Warning states
        'organic-error': '#ef4444',   // Error states
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
