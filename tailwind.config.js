/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.jsx',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    gold: '#C89B3C',
                    charcoal: '#111111',
                    dark: '#1E1E1E',
                    stone: '#F7F7F5',
                    border: '#E7E5E4',
                },
            },
            boxShadow: {
                soft: '0 8px 35px rgba(17,17,17,0.08)',
            },
            borderRadius: {
                '4xl': '2rem',
            },
        },
    },
    plugins: [],
};
