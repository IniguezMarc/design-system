/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    safelist: [
        {
            pattern: /(bg|text|border)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[0-9]{2,3}/,
            variants: ['hover', 'focus', 'dark', 'dark:hover', 'dark:focus'],
        }
    ],
    theme: {
        extend: {
        },
    },
    plugins: [],
}