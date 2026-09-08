/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581', 
          700: '#334e68',
          800: '#243b53', 
          900: '#102a43', // Deep Corporate Blue
          950: '#0a192f', // Premium Navy
          DEFAULT: '#00103e',
          fixed: '#dce1ff',
          'fixed-dim': '#b6c4ff',
          container: '#00216c',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          DEFAULT: '#565f6b',
          fixed: '#dae3f1',
          'fixed-dim': '#bec7d5',
          container: '#d8e0ef',
        },
        accent: {
          500: '#0ea5e9', // Sky Blue accent
          600: '#0284c7',
        },
        surface: {
          DEFAULT: '#faf9fb',
          dim: '#dbd9dc',
          bright: '#faf9fb',
          'container-lowest': '#ffffff',
          'container-low': '#f4f3f5',
          container: '#efedf0',
          'container-high': '#e9e8ea',
          'container-highest': '#e3e2e4',
          variant: '#e3e2e4',
          tint: '#4059aa'
        },
        'on-surface': {
          DEFAULT: '#1b1c1e',
          variant: '#43474d'
        },
        'on-primary': {
          DEFAULT: '#ffffff',
          container: '#738ce0',
          fixed: '#00164e',
          'fixed-variant': '#264191'
        },
        'on-secondary': {
          DEFAULT: '#ffffff',
          container: '#5b636f',
          fixed: '#141c26',
          'fixed-variant': '#3f4753'
        },
        background: '#faf9fb',
        'on-background': '#1b1c1e',
        outline: {
          DEFAULT: '#74777e',
          variant: '#c3c6ce'
        },
        error: {
          DEFAULT: '#ba1a1a',
          container: '#ffdad6'
        },
        'on-error': {
          DEFAULT: '#ffffff',
          container: '#93000a'
        },
        'inverse-surface': '#2f3032',
        'inverse-on-surface': '#f2f0f3',
        'inverse-primary': '#b6c4ff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 12px 30px -4px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'float-horizontal': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(15px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-out forwards',
        'float-slow': 'float 12s ease-in-out infinite',
        'float-slower': 'float 18s ease-in-out infinite',
        'float-horizontal-slow': 'float-horizontal 20s ease-in-out infinite',
        'pulse-slower': 'pulse-slow 15s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} 
