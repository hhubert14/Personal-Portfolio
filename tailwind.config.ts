import type { Config } from "tailwindcss"
import { PluginAPI } from "tailwindcss/types/config"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-geist-sans)", "sans-serif"],
                mono: ["var(--font-geist-mono)", "monospace"],
                cormorantGaramond: ["var(--font-cormorant-garamond)", "serif"],
                poppins: ["var(--font-poppins)", "sans-serif"],
            },
        },
    },
    plugins: [
        function ({ addUtilities }: PluginAPI) {
            const newUtilities = {
                ".scrollbarThin": {
                    scrollbarColor: "rgb(255 255 255) black",
                },
                ".scrollbar-webkit": {
                    "&::-webkit-scrollbar": {
                        width: "8px",
                    },
                    "&::-webkit-scrollbar-track": {
                        background: "white",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "rgb(31 41 55)",
                        borderRadius: "20px",
                        border: "1px solid white",
                    },
                },
            }
            addUtilities(newUtilities)
        },
    ],
    darkMode: "class",
}

export default config
