/** @type {import('tailwindcss').Config} */
export default {
  content: {
    relative: true,
    files: [
      "./index.html",
      "./src/components/*.{js,ts,jsx,tsx}",
      "./src/components/forms/AddonField/*.{js,ts,jsx,tsx}",
      "./src/components/forms/BaseButton/*.{js,ts,jsx,tsx}",
      "./src/blocks/*.{js,ts,jsx,tsx}",
      "./src/layouts/*.{js,ts,jsx,tsx}",
    ]
  },
  theme: {
    extend: {
      colors: {
        white: "#F5F5F5",
        black: "#1A1A1A",
        "red-500": "#DD3658",
      },
      borderRadius: {
        xs: '0.125rem',
        sm: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}

