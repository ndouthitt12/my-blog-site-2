/** @type {import('tailwindcss').Config} */
export default {
content: [
"./app/**/*.{js,jsx}",
"./components/**/*.{js,jsx}",
"./content/**/*.{md,mdx}"
],
theme: {
extend: {
colors: {
bg: "#0b1020"
},
typography: ({ theme }) => ({
DEFAULT: {
css: {
color: theme('colors.slate.100'),
a: { color: theme('colors.indigo.400') },
code: { color: theme('colors.indigo.300') }
}
}
})
}
},
plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')]
};