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
				primary: '#16A34A', // Vibrant green
				secondary: '#0F5132', // Deep forest green
				neutral: '#F3F4F6', // Soft light green-neutral background
				darkText: '#1B4332', // Dark green for text
				subtleText: '#52796F', // Muted green-gray for subtle text
				'gray-1': '#9ca3af',
				'gray-2': '#6b7280',
			},
		},
	},
	plugins: [],
};
