/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                Oscuro: "#1E1E1E",
                VerdeOscuro: "#355230",
                Verde: "#7CC5A8",
                Aqua: "#E4F0EB",
                Gris: "#EFEFEF",
            },
        },
    },
    plugins: [],
};

/* prettier-ignore */
