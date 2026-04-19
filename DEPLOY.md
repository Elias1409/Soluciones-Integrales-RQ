# Cómo publicar el sitio en producción

## Opción 1 — Vercel (recomendado, gratis)

### Pasos
1. Crear cuenta en [vercel.com](https://vercel.com) con tu cuenta de GitHub/GitLab/Bitbucket
2. Subir este proyecto a un repositorio de GitHub
3. En Vercel → **Add New Project** → importar el repositorio
4. Vercel detecta Vite automáticamente. Dejar todo por defecto y clic en **Deploy**
5. En ~60 segundos tendrás una URL pública tipo `https://soluciones-rq.vercel.app`

### Desde la terminal (alternativa)
```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## Opción 2 — Netlify (también gratis)

### Arrastar y soltar (sin cuenta de Git)
1. Ejecutar el build localmente:
   ```bash
   npm run build
   ```
2. Entrar a [app.netlify.com/drop](https://app.netlify.com/drop)
3. Arrastrar la carpeta `/dist` generada → listo, URL pública instantánea

### Desde la terminal
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

---

## Opción 3 — GitHub Pages (gratis, requiere ajuste)

1. Instalar el plugin:
   ```bash
   npm install -D gh-pages
   ```
2. Agregar en `vite.config.js`:
   ```js
   export default defineConfig({
     base: '/nombre-del-repo/',   // ← nombre exacto del repositorio
     plugins: [react(), tailwindcss()],
   })
   ```
3. Agregar en `package.json` dentro de `"scripts"`:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
4. Ejecutar:
   ```bash
   npm run deploy
   ```
5. URL pública: `https://tu-usuario.github.io/nombre-del-repo/`

---

## Dominio personalizado (opcional)

Si tienes un dominio propio (ej. `solucionesrq.com`):
- **Vercel**: Settings → Domains → agregar dominio → apuntar DNS
- **Netlify**: Site settings → Domain management → agregar dominio

Ambos incluyen HTTPS gratuito con Let's Encrypt.

---

## Resumen de opciones

| | Vercel | Netlify | GitHub Pages |
|---|---|---|---|
| Precio | Gratis | Gratis | Gratis |
| Facilidad | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| Dominio propio | ✅ | ✅ | ✅ |
| HTTPS | ✅ | ✅ | ✅ |
| Velocidad de deploy | ~1 min | ~1 min | ~3 min |

**Recomendación**: Usar **Vercel** si tienes GitHub, o el drag-and-drop de **Netlify** si quieres publicar sin subir código a ningún repositorio.
