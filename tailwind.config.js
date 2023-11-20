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
				bgColor: "#e6e8fa",
				primaryColor: "#353536",
				secondaryColor: "#353536",
				textColor: "#1b1c1c",

				darkbgColor: "#060606",
				darkprimaryColor: "#FFFF",
				darksecondaryColor: "#1f1f1f",
				darktextColor: "#E8E2D8",
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
