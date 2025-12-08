/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        /* Core semantic colors from CSS variables */
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        /* Surface system - using new tokens */
        surface: {
          DEFAULT: "var(--color-surface)",
          dim: "var(--color-surface-dim)",
          bright: "var(--color-surface-bright)",
          container: {
            lowest: "var(--color-surface-container-lowest)",
            low: "var(--color-surface-container-low)",
            DEFAULT: "var(--color-surface-container)",
            high: "var(--color-surface-container-high)",
            highest: "var(--color-surface-container-highest)",
          },
        },
        
        /* Direct access to surface containers */
        "surface-container": "var(--color-surface-container)",
        "surface-container-low": "var(--color-surface-container-low)",
        "surface-container-high": "var(--color-surface-container-high)",
        "surface-container-highest": "var(--color-surface-container-highest)",
        
        /* On-surface text colors */
        "on-surface": "var(--color-on-surface)",
        "on-surface-variant": "var(--color-on-surface-variant)",
        
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          container: "var(--color-primary-container)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          container: "var(--color-secondary-container)",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          foreground: "hsl(var(--tertiary-foreground))",
          container: "var(--color-tertiary-container)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "sage-green": {
          DEFAULT: "hsl(var(--sage-green))",
          foreground: "hsl(var(--sage-green-foreground))",
        },
        
        /* Outline colors */
        outline: {
          DEFAULT: "var(--color-outline)",
          variant: "var(--color-outline-variant)",
        },
      },
      borderRadius: {
        card: "var(--radius-card)",
        button: "var(--radius-button)",
        badge: "var(--radius-badge)",
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
        xs: "var(--radius-xs)",
        xl: "var(--radius-xl)",
      },
      fontFamily: {
        hero: ['var(--font-hero)', 'sans-serif'],
        plain: ['var(--font-plain)', 'sans-serif'],
        human: ['var(--font-human)', 'serif'],
        ai: ['var(--font-ai)', 'sans-serif'],
        code: ['var(--font-code)', 'monospace'],
        heading: ['var(--font-hero)', 'sans-serif'],
        body: ['var(--font-plain)', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['var(--text-display-lg)', { lineHeight: 'var(--lh-display-lg)' }],
        'display-md': ['var(--text-display-md)', { lineHeight: '1.1' }],
        'display-sm': ['var(--text-display-sm)', { lineHeight: '1.2' }],
        'headline-lg': ['var(--text-headline-lg)', { lineHeight: '1.25' }],
        'headline-md': ['var(--text-headline-md)', { lineHeight: '1.3' }],
      },
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'base': 'var(--spacing-base)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        'grid': 'var(--spacing-grid)',
      },
      boxShadow: {
        'elevation-1': 'var(--elevation-1)',
        'elevation-2': 'var(--elevation-2)',
        'elevation-3': 'var(--elevation-3)',
        'elevation-4': 'var(--elevation-4)',
        'elevation-5': 'var(--elevation-5)',
      },
      transitionTimingFunction: {
        'emphasized-decelerate': 'var(--ease-emphasized-decelerate)',
        'emphasized-accelerate': 'var(--ease-emphasized-accelerate)',
        'standard': 'var(--ease-standard)',
        'spring': 'var(--ease-spring)',
      },
      transitionDuration: {
        'short1': 'var(--duration-short1)',
        'short2': 'var(--duration-short2)',
        'short3': 'var(--duration-short3)',
        'short4': 'var(--duration-short4)',
        'medium1': 'var(--duration-medium1)',
        'medium2': 'var(--duration-medium2)',
        'medium3': 'var(--duration-medium3)',
        'long1': 'var(--duration-long1)',
      },
      zIndex: {
        'base': 'var(--z-base)',
        'popout': 'var(--z-popout)',
        'scrim': 'var(--z-scrim)',
        'modal': 'var(--z-modal)',
        'tooltip': 'var(--z-tooltip)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in var(--duration-medium1) var(--ease-emphasized-decelerate)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}