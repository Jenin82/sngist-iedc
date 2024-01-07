import type { Config } from "tailwindcss";

const config: Config = {
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
            // animation: {
            //     marqueeForward: "marqueeForward 25s linear infinite",
            //     marqueeBackward: "marqueeBackward 25s linear infinite",
            // },
            // keyframes: {
            //     marqueeForward: {
            //         "0%": { transform: "translateX(0%)" },
            //         "100%": { transform: "translateX(-50%)" },
            //     },
            //     marqueeBackward: {
            //         "0%": { transform: "translateX(-50%)" },
            //         "100%": { transform: "translateX(0%)" },
            //     },
            // },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            "light",
            {
                dark: {
                    ...require("daisyui/src/theming/themes")["dark"],
                    "base-200": "#000000",
                },
            },
            "winter",
        ],
    },
};
export default config;
