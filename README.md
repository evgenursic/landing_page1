# Portfolio Landing (Astro + Tailwind)

Minimalistična, kreativna in profesionalna statična portfolio landing stran za GitHub Pages.

## Stack

- Astro (SSG)
- TailwindCSS
- TypeScript (kjer je smiselno)
- Brez backenda

## Lokalni zagon

```bash
npm install
npm run dev
```

Privzeti URL v razvoju: `http://localhost:4321`

## Build

```bash
npm run build
```

Build output je v `dist/`.

## Deploy na GitHub Pages (GitHub Actions)

Repo že vsebuje workflow: `.github/workflows/deploy.yml`.

1. Pushaj repo na GitHub.
2. Odpri `Settings -> Pages`.
3. Pri `Source` izberi `GitHub Actions`.
4. Push na `main` bo avtomatsko sprožil build + deploy.

Opomba: `astro.config.mjs` samodejno nastavi `site` in `base` iz `GITHUB_REPOSITORY` med GitHub Actions buildom.

## Kako dodajam nove projekte

Uredi datoteko:

- `src/data/projects.ts`

Dodaj nov objekt v polje `projects`:

- `title`
- `summary`
- `tags` (npr. `"Astro"`, `"Automation"`, `"UI"`, `"API"`)
- `status` (`"Shipped"` ali `"In Progress"`)
- `githubUrl`
- `liveUrl` (opcijsko)

Filter po tagih se osveži samodejno.

## Kako zamenjam branding in vsebino

- Brand ime: `src/components/Navbar.astro`, `src/components/Footer.astro`, `src/layouts/BaseLayout.astro`
- Kontakt email: `src/components/Contact.astro`, `src/components/SocialLinks.astro`
- Social linki: `src/components/SocialLinks.astro`
- Hero copy: `src/components/Hero.astro`

## Slike in assets

- Hero device screenshot: zamenjaj `public/hero-shot.png`
- Dodaj dodatne javne datoteke v `public/` (dostopne kot `/ime-datoteke.ext`)

## Struktura

```text
.
├── .github/workflows/deploy.yml
├── public/hero-shot.png
├── src/
│   ├── components/
│   ├── data/projects.ts
│   ├── layouts/BaseLayout.astro
│   ├── pages/index.astro
│   └── styles/global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```
