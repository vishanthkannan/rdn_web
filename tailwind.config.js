/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0f172a', // slate-900
                    light: '#1e293b', // slate-800
                },
                accent: {
                    DEFAULT: '#16a34a', // green-600
                    hover: '#15803d', // green-700
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
