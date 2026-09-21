/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",

	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				surface: "#f3f4fb",
				surfaceDark: "#05060b",

				ink: "#14152a",
				inkDark: "#eef0ff",

				muted: "#5c5e78",
				mutedDark: "#9a9cc0",

				accent: "#7c6bff",
				accent2: "#22d3ee",
				accent3: "#f472b6",
			},
			backgroundImage: {
				"accent-gradient": "linear-gradient(135deg, #7c6bff 0%, #22d3ee 100%)",
			},
			boxShadow: {
				glass: "0 8px 32px rgba(20, 21, 42, 0.10)",
				glassDark: "0 8px 32px rgba(0, 0, 0, 0.45)",
				glow: "0 0 40px rgba(124, 107, 255, 0.35)",
			},
			keyframes: {
				float: {
					"0%, 100%": { transform: "translate(0, 0) scale(1)" },
					"33%": { transform: "translate(30px, -40px) scale(1.08)" },
					"66%": { transform: "translate(-20px, 20px) scale(0.95)" },
				},
				floatSlow: {
					"0%, 100%": { transform: "translate(0, 0) scale(1)" },
					"50%": { transform: "translate(-40px, 30px) scale(1.1)" },
				},
			},
			animation: {
				float: "float 18s ease-in-out infinite",
				floatSlow: "floatSlow 24s ease-in-out infinite",
			},
		},
	},
	plugins: [],
};
