# PixelVision

Site web premium cinématique pour une marque de photo/vidéo sport (Next.js 14 + TypeScript + Tailwind + Framer Motion).

## Prérequis

- Node.js 18.17+ (**recommandé: Node 20 LTS ou 22 LTS**)
- npm 9+

> Évitez Node 25 pour ce projet: Next.js 14 est mieux supporté sur les versions LTS.

## Installation

```bash
npm install
```

## Lancer en local

```bash
npm run dev
```

Puis ouvrir: `http://localhost:3000`

## Vérifier que la page fonctionne

### 1) Vérification visuelle rapide

- Header transparent au chargement puis flou au scroll.
- Logo visible dans le **Header** et le **Footer** depuis:
  - `public/assets/pixelvisionlogo.png`
- Hero plein écran avec CTA:
  - `View Work`
  - `Book a Shoot`
- Portfolio:
  - filtres `all / photo / video`
  - ouverture du modal au clic sur une carte
- Services: 3 packages affichés.
- Booking:
  - formulaire multi-step
  - barre de progression rouge
  - écran de confirmation final

### 2) Vérification technique

```bash
npm run lint
npm run build
npm run start
```

- `npm run lint`: contrôle qualité ESLint
- `npm run build`: valide que la version production compile
- `npm run start`: sert la build de production

## Assets attendus

Déposer vos assets ici:

- `public/assets/pixelvisionlogo.png` (**obligatoire**)
- `public/assets/hero-video.mp4` (optionnel)

Sans `hero-video.mp4`, le hero utilise automatiquement l'image `poster` de fallback.

## Dépannage

- Si vous voyez l'erreur `Configuring Next.js via 'next.config.ts' is not supported`, utilisez bien `next.config.mjs` (déjà inclus dans ce repo).
- Si `npm install` retourne un `403 Forbidden`, le problème vient généralement de l'accès réseau/registry npm de l'environnement.
- Vérifiez la connectivité vers `https://registry.npmjs.org` ou la configuration proxy interne.
