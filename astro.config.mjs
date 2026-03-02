import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? "").split("/");

export default defineConfig({
  site: owner && repo ? `https://${owner}.github.io/${repo}/` : "https://example.com/",
  base: repo ? `/${repo}/` : "/",
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ]
});
