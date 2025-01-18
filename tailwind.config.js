/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1rem',
			},
			colors: {
				primary: '#4F46E5',
				secondary: '#16A34A',
				accent: '#F97316',
				neutral: '#F3F4F6',
				darkText: '#1F2937',
				subtleText: '#6B7280',
			},
		},
	},
	plugins: [],
};
