# Archiva React

Application React convertie depuis le site statique Archiva, selon les 7 tâches demandées.

## Tâches réalisées

1. **Mettre en place React** — Projet Vite + React 19
2. **Découper l'interface en composants**
   - `DocumentList` (liste des documents)
   - `SearchBar` (recherche)
   - `DocumentDetail` (détail d'un document)
   - `DocumentCard`, `Header`, `Footer`
3. **Bootstrap** — `bootstrap` + `react-bootstrap`
4. **React Router DOM** — navigation entre Accueil, CERs, Favoris, Gestion, Connexion, Inscription, Détail
5. **useState + Context API** — `AppContext` pour cers, favoris, user, recherche
6. **fetch** — appels API dans le Context (avec fallback local si backend absent)
7. **Controlled Components** — formulaires Login, Register, AddCer

## Lancer le projet

```bash
cd archiva-react
npm install
npm run dev
```

Ouvrir http://localhost:5173

## Structure

```
src/
  components/   # Header, Footer, SearchBar, DocumentCard, DocumentList, DocumentDetail
  pages/        # Home, Cers, Favoris, MesCers, Login, Register, AddCer
  context/      # AppContext (état global + fetch)
  data/         # cers.js (données mock)
```

## Backend

Par défaut l'API est attendue sur `http://localhost:3000/api`.
Si elle est inaccessible, les données locales (mock) sont utilisées.
