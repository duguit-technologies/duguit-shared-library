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
import {setApiBaseURL} from "duguit-shared-library";

const app = createApp(App)

app.use(createPinia())
app.use(router)
setApiBaseURL(import.meta.env.VITE_API_URL)

app.mount('#app')
```

### Toasts

Pour utiliser les toasts avec tailwind il faut redefinir leur style:   
```
<Toast class="absolute bottom-5 right-5"/>
```

## Compte de Test

ID: alexG1@example.com   
MDP: string