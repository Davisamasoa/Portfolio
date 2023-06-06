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
				bgColor: "#000000",
				primaryColor: "#FFFF",
				secondaryColor: "#181818",
				textColor: "#DADADA",
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
