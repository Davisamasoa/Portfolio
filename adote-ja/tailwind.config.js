/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				bgColor: "#DDDAE8",
				brand: "#59E881",
				darkest: "#262335",
				mid: "#6D59C0",
			},
		},
	},
	plugins: [],
};
