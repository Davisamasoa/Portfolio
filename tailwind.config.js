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
				bgColor: "#03081B",
				primaryColor: "#E8E2D8",
				secondaryColor: "#212B50",
				textColor: "#E8E2D8",
			},
			boxShadow: {
				custom: "3px 3px 10px 1px",
			},
		},
		fontFamily: {
			montserrat: ["Montserrat", "sans-serif"],
		},
	},
	plugins: [],
};
