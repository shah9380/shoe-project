/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['index.html'],
	theme: {
		extend: {
			height: {
				card: '35.15625rem',
			},
			width: {
				card: '68.4375rem',
			},
			fontFamily: {
				IBMPlex: ['"IBM Plex Mono"', 'monospace'],
			},
			textColor: {
				'shoe-green': '#1bc8bb',
			},
			boxShadow: {
				green: '8px 8px 0px 0px rgb(45,212,191)',
				'green-small': '4px 4px 0px 0px rgba(45,212,191,1);',
			},
			colors: {
				'new-green': '#2dd4bf',
			},
		},
	},
	plugins: [],
}