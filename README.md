# Portfolio Professionnel — Emine AGATT

Portfolio d'ingénieur **Tech Premium** conçu avec **Astro 5**, **Tailwind CSS**, **MDX** et **TypeScript** pour accompagner la recherche de **stage de fin d'études en Data Science, Machine Learning ou Intelligence Artificielle** d'Emine AGATT (CY Tech, 2024–2027).

---

## 1. Commandes de développement et de build

Depuis le répertoire du projet (`C:\Users\Administrateur\.gemini\antigravity\scratch\emine-agatt-portfolio`) :

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement local (http://localhost:4321)
npm run dev

# Vérifier le typage TypeScript/Astro et compiler le site statique dans dist/
npm run build

# Prévisualiser la version de production localement
npm run preview
```

---

## 2. Liste des informations à compléter avant publication finale

L'expérience **BNP Paribas CIB (AML IT Detection Team)** est désormais entièrement renseignée et détaillée avec ses deux projets (**Entity Resolution Evaluation** et **ISO 20022 Data Modeling / DFR**). Toutes les informations encore en attente sont centralisées dans **`src/config/profile.ts`**.

### A. Coordonnées, CV et paramètres de stage
Dans `src/config/profile.ts` (`contact`) :
- `email.value` : renseigner votre adresse email professionnelle (ex. `"emine.agatt@cy-tech.fr"`).
- `githubUrl.value` : renseigner l'URL de votre profil GitHub (ex. `"https://github.com/..."`) — l'icône GitHub s'activera automatiquement dans l'en-tête, le Hero et la section Contact.
- `cvPdfPath.value` : déposer votre CV dans `public/cv/CV_Emine_AGATT.pdf` puis renseigner `"/cv/CV_Emine_AGATT.pdf"` — le bouton **« Télécharger mon CV »** apparaîtra automatiquement dans le Hero et la section Contact.
- `internshipAvailability.value` : préciser la période et la durée du stage de fin d'études recherché (ex. `"6 mois à partir de février/mars 2027"`).
- `mobility.value` : préciser votre mobilité géographique (ex. `"Paris / Île-de-France, France & International"`).

### B. Liens de code source ou démonstrations des 5 projets académiques (Optionnel)
Dans chaque fiche MDX située dans `src/content/projects/01-...mdx` à `05-...mdx` :
- `repositoryUrl` : remplacer `null` par l'URL du dépôt GitHub correspondant lorsqu'il est public.
- `demoUrl` : remplacer `null` par l'URL d'une éventuelle démonstration en ligne.

---

## 3. Déploiement (Vercel ou Cloudflare Pages)

Le site est généré en **100 % statique** (`dist/`) sans dépendance serveur, ce qui garantit des performances maximales et un hébergement gratuit sur **Vercel** ou **Cloudflare Pages**.

### Option 1 : Déploiement sur Vercel (Recommandé)
1. Initialisez un dépôt Git et poussez le projet sur GitHub :
   ```bash
   git init
   git add .
   git commit -m "feat: initial Tech Premium portfolio for Emine AGATT"
   git branch -M main
   git remote add origin https://github.com/<votre-compte>/<votre-repo>.git
   git push -u origin main
   ```
2. Sur [vercel.com](https://vercel.com), cliquez sur **Add New Project** et importez votre dépôt GitHub.
3. Paramètres détectés automatiquement :
   - **Framework Preset** : `Astro`
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
4. Mettez à jour la propriété `site` dans `astro.config.mjs` avec votre URL finale ou nom de domaine personnalisé.

### Option 2 : Déploiement sur Cloudflare Pages
1. Connectez votre dépôt GitHub dans **Cloudflare Dashboard → Compute (Workers & Pages) → Pages**.
2. Paramètres de build :
   - **Framework preset** : `Astro`
   - **Build command** : `npm run build`
   - **Build output directory** : `dist`
   - **Variable d'environnement** : `NODE_VERSION = 22`
