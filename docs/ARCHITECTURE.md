# Arhitektura platforme za kozmetičke salone (MERN + mobilno)

Ovaj repozitorij slijedi dijagram **deepblue.hr — MERN stack arhitektura** (izvor: `docs/deepblue_mern_architecture.svg`).

## Pregled slojeva

### 1. Klijentski sloj (React + Vite)

Javna web aplikacija u `apps/web` pokriva ključne module iz dijagrama:

| Modul | Ruta | Svrha |
|--------|------|--------|
| Početna | `/` | Hero, istaknute usluge, CTA prema rezervaciji |
| Rezervacije | `/rezervacije` | Odabir usluge i termina (mock slotovi) |
| Cjenik | `/cjenik` | Usluge i cijene |
| Galerija | `/galerija` | Radovi + recenzije |
| Profil | `/profil` | Povijest rezervacija (mock, nakon prijave) |

Komunikacija prema backendu: **REST / JSON** (`VITE_API_URL`).

### 2. API sloj (Express.js + Node)

Logički servisi iz dijagrama implementirani su kao **moduli unutar jednog Express procesa** (monolit prilagođen malim i srednjim salonima; kasnije se mogu izdvojiti u zasebne procese):

- **Booking** — termini, dostupnost (`/api/bookings`, `/api/availability`)
- **Auth** — JWT + korisnici/role (`/api/auth`) — stub za registraciju/prijavu
- **Content** — usluge, galerija, recenzije (`/api/services`, `/api/gallery`, `/api/reviews`)

### 3. Baza podataka (MongoDB)

Kolekcije (Atlas ili lokalni MongoDB):

- `bookings`
- `users`
- `services`
- `gallery` / `reviews`

U razvoju bez baze postavite `MOCK_API=true` u `apps/api/.env` — API vraća iste podatke kao `@salon/shared` mockovi.

### 4. Vanjski servisi (integracije u produkciji)

Prema dijagramu planirano:

| Servis | Namjena |
|--------|---------|
| Twilio SMS | Potvrda termina |
| Stripe | Online plaćanje / depozit |
| Cloudinary | Galerija slika |
| Nodemailer | Email potvrde |

Trenutačni scaffold ne sadrži produkcijske ključeve; dodajte adaptere u `apps/api` kad budete spremni.

### 5. Mobilna aplikacija (Expo + React Native)

`apps/mobile` dijeli **isti REST API** i **iste mock podatke** (`@salon/shared`) za paralelan razvoj. Navigacija: početna, rezervacije, cjenik, galerija, profil.

## Monorepo struktura

```
deepblue/
├── apps/
│   ├── web/          # React + Vite + SCSS
│   ├── api/          # Express
│   └── mobile/       # Expo
├── packages/
│   ├── shared/       # Tipovi + mock podaci + brend Deep Blue
│   └── brand/        # JSON predlošci salona (white-label)
└── docs/
```

## White-label (drugi salon)

1. Dodajte `packages/brand/salons/<vas-salon>.json` (kopija `template.salon.json`).
2. Zamijenite `apps/web/public/brand/logo.svg`.
3. U `packages/shared` dodajte `brand.<salon>.ts` ili prilagodite postojeći export i uvezite ga u `apps/web/src/config/brand.ts` te u mobilnoj aplikaciji u `src/theme.ts` (boje) i u ekranima koji koriste `deepblueBrand`.

Mobilna aplikacija u monorepu koristi `metro.config.cjs` (`watchFolders`) i izravne putanje do `packages/shared/src` kako bi Metro mogao transpilirati zajednički kod.

## Pokretanje

```bash
npm install
```

Zatim u zasebnim terminalima:

```bash
npm run dev:api
npm run dev:web
npm run dev:mobile
```

API zadano: `http://localhost:4000`. Web očekuje `VITE_API_URL` u `apps/web/.env`.

## Sljedeći koraci

- Povezati Mongoose modele s pravim shemama i validacijom.
- Zamijeniti mock auth JWT implementacijom (refresh tokeni, role: admin / klijent).
- Admin CMS rute pod `content` servisom za uređivanje usluga i galerije.
- CI/CD i deployment (npr. API na Render/Fly, web na Vercel/Netlify, Atlas za MongoDB).
