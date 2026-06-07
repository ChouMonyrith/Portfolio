const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        gray: {
          100: "#F5F5F5",
          200: "#E0E0E0",
          800: "#1A1A1A",
          900: "#111111",
        },
      },
    },
  },
};

export default config;
