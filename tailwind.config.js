/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{html,js,ts,jsx,tsx,css}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#26262B',
                brand: {
                    pink: '#F2A7B5',
                    blue: '#3D5A80',
                    beige: '#F4EDE3',
                }
            },
            fontFamily: {
                sans: ['Avenir Next', 'Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
};
