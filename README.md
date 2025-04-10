# Bibliotheque de Ressources Partagées

Ce Répository contient les Ressources entre les différentes application Duguit   
app.duguit.local, app.sav.duguit.local, app.be.duguit.local.   
Elle permet de ce centralisé la logique a un seul endroit afin de faciliter le maintient du code.  

Ce répertoire s'organise principalement en une branch main et une branch development

## Requis

### API

Definir l'url de l'api pour axios api, par exemple dans main.ts:
```
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'flowbite';
import 'duguit-shared-library/dist/duguit-shared-library.css';
import {setApiBaseURL} from "duguit-shared-library";

const app = createApp(App)

app.use(createPinia())
app.use(router)
setApiBaseURL(import.meta.env.VITE_API_URL)

app.mount('#app')
```

### Style css

Pour utiliser le style css de la lib dans le main.ts ajouter l'import du fichier css
```
import 'duguit-shared-library/dist/duguit-shared-library.css';
```

Avec tailwind 3 ajouter au fichier de config :   
```
'./node_modules/duguit-shared-library/dist/**/*.{js,vue,ts}'
```
complet 
```
/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';
import flowbite from 'flowbite/plugin';

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    "./node_modules/flowbite/**/*.js",
    './node_modules/duguit-shared-library/dist/**/*.{js,vue,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2B2D42',
        secondary: '#EF233C',
        neutral: '#EDF2F4',
        primaryVariant: '#8D99AE',
        secondaryVariant: '#D90429'
      },
    },
    safelist: [
      // Liste des classes dynamiques qui doivent être incluses dans la génération
      'bg-gray-100', 'text-gray-800',
      'bg-pink-100', 'text-pink-800',
      'bg-yellow-100', 'text-yellow-800',
      'bg-teal-100', 'text-teal-800',
    ],
  },
  plugins: [
    forms,
    flowbite
  ],
}


```

## Compte de Test

ID: alexG1@example.com   
MDP: string