/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#090D14',
          surface: '#111827',
          elevated: '#1A2333',
          subtle: '#0D131F',
        },
        text: {
          primary: '#F5F7FA',
          secondary: '#A0AEC0',
          muted: '#718096',
        },
        accent: {
          primary: '#60A5FA',
          secondary: '#22D3EE',
          glow: 'rgba(96, 165, 250, 0.14)',
        },
        status: {
          pending: '#FBBF24',
          verified: '#34D399',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        card: '0 4px 24px -4px rgba(0, 0, 0, 0.45)',
        'card-hover': '0 12px 32px -8px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(96, 165, 250, 0.3)',
      },
      backgroundImage: {
        'radial-tech': 'radial-gradient(circle at 50% 0%, rgba(96, 165, 250, 0.10), transparent 65%)',
        'grid-pattern':
          'linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
