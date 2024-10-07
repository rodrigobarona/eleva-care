import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-lora)'],
        sans: ['var(--font-alexandria)'],
        mono: ['var(--font-jetbrains)'],
      },
      colors: {
        /* Eleva Care */
        elevaPrimary: {
          DEFAULT: 'rgb(var(--eleva-primary))',
          light: 'rgb(var(--eleva-primary-light))',
        },
        elevaSecondary: {
          DEFAULT: 'rgb(var(--eleva-secondary))',
          light: 'rgb(var(--eleva-secondary-light))',
        },
        elevaAccent: {
          DEFAULT: 'rgb(var(--eleva-accent))',
        },
        elevaNeutral: {
          '100': 'rgb(var(--eleva-neutral-100))',
          '200': 'rgb(var(--eleva-neutral-200))',
          '900': 'rgb(var(--eleva-neutral-900))',
        },
        elevaHighlight: {
          red: 'rgb(var(--eleva-highlight-red))',
          purple: 'rgb(var(--eleva-highlight-purple))',
          yellow: 'rgb(var(--eleva-highlight-yellow))',
        },
        accent: {
          DEFAULT: 'rgb(var(--eleva-accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },

        /* shadcn/ui */
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
