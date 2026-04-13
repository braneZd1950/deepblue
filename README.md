# Salon platform (Deep Blue demo)

White-label monorepo: **React (Vite) web**, **Express API**, **Expo mobile**, zajednički **`@salon/shared`** paket.

## Zahtjevi

- Node.js **≥ 20**
- npm (workspaces)

## Lokalno

```bash
npm install
npm run dev
```

- Web: Vite (vidi `apps/web`, zadano `http://localhost:5173`)
- API: Express (vidi `apps/api`, zadano `http://localhost:4000`)

Zasebno:

```bash
npm run dev:web
npm run dev:api
npm run dev:mobile
```

Web može koristiti `apps/web/.env` s `VITE_API_URL=http://localhost:4000` ako želite živi API.

## Build

```bash
npm run build:web
npm run build:api
```

## Deploy na Render (sažetak)

### Statički site (samo frontend)

1. **New → Static Site**, povežite ovaj GitHub repozitorij.
2. **Root directory**: ostavite prazno (root monorepa).
3. **Build command**: `npm install && npm run build:web`
4. **Publish directory**: `apps/web/dist`
5. **Environment**: dodajte `VITE_API_URL` s punim URL-om vašeg API-ja na Renderu (npr. `https://your-api.onrender.com`) prije builda.

### Web service (API)

1. **New → Web Service**, isti repo.
2. **Build command**: `npm install && npm run build:api`
3. **Start command**: `npm run start -w @salon/api`
4. Postavite `PORT` (Render postavlja automatski) i ostale varijable u `apps/api` ako treba.

Monorepo ovisi o `npm install` u rootu da se workspace paketi (`@salon/shared`) povežu.

## Push na GitHub (prvi put)

1. Na [github.com/new](https://github.com/new) kreirajte **prazan** repozitorij (bez README/licence), npr. `deepblue`.
2. U mapi projekta:

```bash
git remote add origin https://github.com/<GITHUB_KORISNIK>/<IME_REPO>.git
git branch -M main
git push -u origin main
```

Ako koristite SSH: `git@github.com:<GITHUB_KORISNIK>/<IME_REPO>.git`

## Dokumentacija

Vidi `docs/ARCHITECTURE.md`.

## Licenca

Privatni / interni projekt — prilagodite prema potrebi.
