/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        surface: "var(--color-surface)",
        bg: "var(--color-bg)",
        card: "var(--color-card)",
        "card-border": "var(--color-card-border)",
        copy: "var(--color-copy)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
        "accent-soft": "var(--color-accent-soft)"
      },
      boxShadow: {
        soft: "0 24px 48px -28px rgba(0, 0, 0, 0.45)"
      }
    }
  },
  plugins: []
};
