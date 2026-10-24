# Ada Coders · Sitio web

Sitio estático (HTML + CSS + JS), sin instalar nada.

## Estructura
- `index.html` — estructura base (casi no se toca)
- `js/content.js` — **todo el contenido editable** (textos, links, hackatón, equipo, FAQ)
- `js/main.js` — arma la página con el contenido
- `css/styles.css` — estilos y colores (variables al inicio)

## Cómo editar
1. Abre `js/content.js` y cambia textos y links. Un link vacío (`""`) oculta su botón.
2. Para cambiar colores, edita las variables `--purple` y `--teal` en `css/styles.css`.
3. Guarda, haz commit y push: la página se actualiza sola.

## Subir a GitHub
```bash
git init
git add .
git commit -m "Primera versión del sitio de Ada Coders"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/ada-coders-web.git
git push -u origin main
```

## Publicar gratis (GitHub Pages)
En el repo: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save**.
Tu sitio quedará en `https://TU-USUARIO.github.io/ada-coders-web/`.

## Probar en tu computadora
Abre `index.html` con doble clic.
