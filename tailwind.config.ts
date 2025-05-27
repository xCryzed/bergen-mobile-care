
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Warm, professional colors for foot care
				'soft-blue': {
					50: '#f0f9ff',
					100: '#e0f2fe', 
					200: '#bae6fd',
					300: '#7dd3fc',
					400: '#38bdf8',
					500: '#0ea5e9',
					600: '#0284c7',
					700: '#0369a1',
					800: '#075985',
					900: '#0c4a6e'
				},
				'warm-beige': {
					50: '#fdf8f6',
					100: '#f2e8e5',
					200: '#eaddd7',
					300: '#e0cfc7',
					400: '#d2bab0',
					500: '#bfa094',
					600: '#a18072',
					700: '#977669',
					800: '#846358',
					900: '#43302b'
				},
				'sage': {
					50: '#f6f7f6',
					100: '#e3e7e3',
					200: '#c7d2c7',
					300: '#9fb5a0',
					400: '#739475',
					500: '#557758',
					600: '#426045',
					700: '#364c38',
					800: '#2d3f2f',
					900: '#273529'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			fontSize: {
				'clamp-xs': 'clamp(0.75rem, 2vw, 0.875rem)',
				'clamp-sm': 'clamp(0.875rem, 2.5vw, 1rem)',
				'clamp-base': 'clamp(1rem, 3vw, 1.125rem)',
				'clamp-lg': 'clamp(1.125rem, 4vw, 1.25rem)',
				'clamp-xl': 'clamp(1.25rem, 5vw, 1.5rem)',
				'clamp-2xl': 'clamp(1.5rem, 6vw, 2rem)',
				'clamp-3xl': 'clamp(1.875rem, 7vw, 2.5rem)',
				'clamp-4xl': 'clamp(2.25rem, 8vw, 3rem)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
