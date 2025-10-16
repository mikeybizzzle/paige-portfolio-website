import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        brand: {
          midnight: {
            DEFAULT: '#3D5A5C',
            50: '#E8EEEE',
            100: '#D1DCDD',
            200: '#A3B9BB',
            300: '#759798',
            400: '#477476',
            500: '#3D5A5C', // Base
            600: '#314850',
            700: '#25363C',
            800: '#192428',
            900: '#0D1214',
          },
          blush: {
            DEFAULT: '#E8B4A8',
            50: '#FBF7F6',
            100: '#F7EFED',
            200: '#F3E0DB',
            300: '#EED0C9',
            400: '#E8B4A8', // Base
            500: '#E09C8D',
            600: '#D77E6B',
            700: '#CE604A',
            800: '#B34731',
            900: '#8A3626',
          },
          ivory: {
            DEFAULT: '#F9F6F2',
            50: '#FFFFFF',
            100: '#FFFFFF',
            200: '#FEFDFB',
            300: '#FCFAF7',
            400: '#F9F6F2', // Base
            500: '#F3EDE5',
            600: '#E8DDCE',
            700: '#DCCEB7',
            800: '#D0BEA0',
            900: '#C4AF89',
          },
        },
        // Secondary Colors
        charcoal: {
          DEFAULT: '#2C2C2C',
          50: '#E8E8E8',
          100: '#D1D1D1',
          200: '#A3A3A3',
          300: '#757575',
          400: '#474747',
          500: '#2C2C2C', // Base
          600: '#232323',
          700: '#1A1A1A',
          800: '#121212',
          900: '#090909',
        },
        moss: {
          DEFAULT: '#A8B5A0',
          50: '#F4F6F3',
          100: '#E9EDE7',
          200: '#D3DBCF',
          300: '#BDC9B7',
          400: '#A8B5A0', // Base
          500: '#8FA181',
          600: '#758D65',
          700: '#5C714F',
          800: '#46553D',
          900: '#30392A',
        },
        terracotta: {
          DEFAULT: '#C77B65',
          50: '#F9F1EF',
          100: '#F3E3DF',
          200: '#E7C7BF',
          300: '#DBAB9F',
          400: '#CF8F7F',
          500: '#C77B65', // Base
          600: '#B35A3F',
          700: '#8A4531',
          800: '#603125',
          900: '#371D16',
        },
        slate: {
          DEFAULT: '#8B9693',
          50: '#F2F3F3',
          100: '#E5E7E6',
          200: '#CBD0CD',
          300: '#B1B8B4',
          400: '#97A19B',
          500: '#8B9693', // Base
          600: '#6F7A77',
          700: '#565E5C',
          800: '#3D4341',
          900: '#242726',
        },
      },
      fontFamily: {
        // Headings & Display
        display: ['var(--font-freight-display)', 'Cormorant Garamond', 'Georgia', 'serif'],
        // Body & UI
        sans: ['var(--font-circular)', 'Inter', 'DM Sans', 'system-ui', '-apple-system', 'sans-serif'],
        // Script/Accent
        script: ['var(--font-amelaryas)', 'Sacramento', 'cursive'],
      },
      fontSize: {
        // Display sizes
        'display-xl': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['56px', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '700' }],
        'display-sm': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        // Heading sizes
        'h1': ['40px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h2': ['32px', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h3': ['24px', { lineHeight: '1.3', letterSpacing: '-0.005em', fontWeight: '600' }],
        'h4': ['20px', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '600' }],
        // Body sizes
        'body-lg': ['18px', { lineHeight: '1.7', letterSpacing: '0', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.5', letterSpacing: '0.01em', fontWeight: '400' }],
      },
      spacing: {
        // 4px base unit system
        '0': '0px',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '14': '56px',
        '16': '64px',
        '18': '72px',
        '20': '80px',
        '24': '96px',
        '28': '112px',
        '30': '120px',
        '32': '128px',
      },
      borderRadius: {
        'none': '0',
        'sm': '4px',
        'DEFAULT': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        'full': '9999px',
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(61, 90, 92, 0.05)',
        'sm': '0 2px 4px 0 rgba(61, 90, 92, 0.06)',
        'DEFAULT': '0 4px 6px -1px rgba(61, 90, 92, 0.07)',
        'md': '0 8px 16px -2px rgba(61, 90, 92, 0.08)',
        'lg': '0 16px 32px -4px rgba(61, 90, 92, 0.1)',
        'xl': '0 24px 48px -8px rgba(61, 90, 92, 0.12)',
        'colored': '0 8px 16px -2px rgba(232, 180, 168, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'slide-in-left': 'slideInLeft 0.3s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      zIndex: {
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
      },
    },
  },
  plugins: [],
}

export default config