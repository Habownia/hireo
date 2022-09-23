/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
				domine: ['"Domine"', 'serif'],
				trocchi: ['Trocchi', 'serif'],
				apple: ['"Homemade Apple"', 'sans-serif'],
			},
			backdropBlur: {
				xs: '2px',
			},
		},
		screens: {
			mobilel: '425px',
			mobilem: '375px',
			mobiles: '320px',
			tablet: '768px',
			laptop: '1024px',
			desktop: '1280px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
	},
	plugins: [],
};
