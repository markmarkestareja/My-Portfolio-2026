/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                header: ['Inter', 'sans-serif'],
                body: ['Archivo', 'sans-serif'],
            },
            fontSize: {
                h1: "32px",
                h1MD: "42px",
                h1LG: "68px",

            },
            colors: {
                black: {
                    100: "#111111",
                    200: "#141414",
                    300: "#1B1B1B",
                },
                white: "#ffffff",
                offWhite: "#8F8D8D",
                primary: "#82FF1F ",
            }
        },
    },
    plugins: [],
}; 