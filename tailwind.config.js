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
				bgColor: "#f0f0f0",
				primaryColor: "#353536",
				secondaryColor: "#353536",
				textColor: "#353536",

				darkbgColor: "#141414",
				darkprimaryColor: "#f0f0f0",
				darksecondaryColor: "#1f1f1f",
				darktextColor: "#f0f0f0",
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
