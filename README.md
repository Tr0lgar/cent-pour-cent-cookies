# 100% Cookies Front-End

Ce projet est le réaménagement et l'extension du site **100% Cookies**, développé dans le cadre de ma montée en compétences sur **Angular 19**. L'objectif principal est d'améliorer l'expérience utilisateur du site existant, en mettant l'accent sur le front-end, tout en préparant une future intégration back-end pour la gestion de la carte du mois et des réservations.

---

## Table des matières

- [Contexte](#contexte)
- [Fonctionnalités prévues (Back-End)](#fonctionnalités-prévues-back-end)
- [Technologies utilisées](#technologies-utilisées)
- [Installation et démarrage](#installation-et-démarrage)
- [Structure du projet](#structure-du-projet)
- [Style guide & bonnes pratiques](#style-guide--bonnes-pratiques)
- [Licence](#licence)

---

## Contexte

Le site **100% Cookies** propose des cookies, cookizzas et brookies, ainsi que des plateaux pour évènements et différents conditionnements. Pour moderniser l’interface, j’apprends Angular et refactore le front-end existant en introduisant :

- Une **navbar dynamique**
- Une **mise en page responsive** articulée autour de sections modulaires
- Des **composants réutilisables** (`display-section`, `boxes-grid`, etc.)

---

## Fonctionnalités prévues (Back-End)

> En cours de réflexion et de planification :

- **Gestion dynamique de la carte du mois**

  - Interface d’administration pour ajouter/modifier les produits du mois
  - Stockage des données dans une base (MongoDB, Firestore ou SQL. *TBD*)

- **Module de réservation**

  - Formulaire de réservation en front, synchronisé avec une API
  - Email de confirmation automatique

---

## Technologies utilisées

- **Framework** : Angular 19
- **Langage** : TypeScript, SCSS
- **Icônes** : FontAwesome
- **Layout** : CSS Grid & Flexbox

> À venir : Node.js, Express/Koa, base de données NoSQL/SQL, JWT pour l’authentification

---

## Installation et démarrage

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/Tr0lgar/cent-pour-cent-cookies.git
   cd cent-pour-cent-cookies
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**

   ```bash
   ng serve
   ```

4. **Ouvrir l’application** dans votre navigateur à l’adresse : `http://localhost:4200`

---

## Structure du projet

```
src
├── app
│        ├── app.component.html
│        ├── app.component.scss
│        ├── app.component.ts
│        ├── app.config.ts
│        ├── app.routes.ts
│        ├── features
│        │       ├── index
│        │       │ └── components
│        │       │     ├── about-us
│        │       │     ├── boxes
│        │       │     ├── features
│        │       │     ├── home-hero
│        │       │     ├── products-display
│        │       │     ├── index.component.html
│        │       │     ├── index.component.scss
│        │       │     └── index.component.ts
│        │       └── produits
│        └── shared
│            └── components
│                └── layout
│                    └── nav-bar
│                        ├── models
│                        │ └── link.model.ts
│                        ├── nav-bar.component.html
│                        ├── nav-bar.component.scss
│                        └── nav-bar.component.ts
├── index.html
├── main.ts
└── styles.scss
```

---

## Style guide & bonnes pratiques

- **Variables SCSS** centralisées pour couleurs, polices et tailles
- **Composants standalone** Angular avec `@Component({ standalone: true })`
- **Bindings** (`[ngStyle]`, `[ngClass]`) pour les styles dynamiques
- **Flexbox & Grid** pour des layouts adaptatifs
- **Séparation** front-end / back-end via services (à implémenter)

---

## Licence

MIT © 2025 — Projet personnel d’apprentissage Angular

