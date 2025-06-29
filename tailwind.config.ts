
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
			fontFamily: {
				'heading': ['Manrope', 'sans-serif'], // Premium heading font
				'body': ['Inter', 'sans-serif'], // Clean body font
				'mono': ['Space Grotesk', 'monospace'], // Data/numbers font
			},
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
				// GameTrust Professional Brand Colors
				'gt': {
					'background': '#0E0E10', // Rich black with subtle blue tint
					'primary': '#FFD166', // Gold honey - prestige & clarity
					'secondary': '#00C9A7', // Mint tech green - modern & fresh
					'text': '#F2F2F2', // Clean white-grey
					'card': '#1A1B1E', // Deep slate for containers
					'border': '#2C2F36', // Stealth elegant lines
					'danger': '#FF4E4E', // Sharp red for alerts
					'warning': '#F39C12', // Gold-orange for warnings
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'gt-glow': '0 0 20px rgba(255, 209, 102, 0.3)',
				'gt-glow-mint': '0 0 20px rgba(0, 201, 167, 0.3)',
				'gt-card': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
			},
			keyframes: {
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(100%)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(255, 209, 102, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 30px rgba(255, 209, 102, 0.6)'
					}
				},
				'mint-glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(0, 201, 167, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 30px rgba(0, 201, 167, 0.6)'
					}
				}
			},
			animation: {
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'mint-glow-pulse': 'mint-glow-pulse 2s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
