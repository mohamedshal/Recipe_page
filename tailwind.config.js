// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				primary: "rgb(131,24,67)",
				stone: "rgb(87,83,78)",
			},
			fontFamily: {
				YoungSerif: ['"Young Serif"', "serif"],
			},
		},
	},
	plugins: [],
};
