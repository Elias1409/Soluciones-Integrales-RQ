# Soluciones Integrales RQ — Landing Page

Sitio web informacional para **Soluciones Integrales RQ**, empresa costarricense especializada en la venta de materiales eléctricos y supresores de voltaje marca **Citel**.

## 🖥️ Demo

🔗 [Ver sitio en vivo](https://soluciones-integrales-rq.vercel.app)

## 📌 Descripción

Página de presentación profesional diseñada para generar confianza en el cliente y dirigirlo a contactar el negocio vía WhatsApp. No es un e-commerce — el objetivo es informar y convertir visitas en consultas directas.

## ✨ Secciones

- **Hero** — Presentación del negocio con llamada a la acción
- **Productos** — Catálogo de categorías: Supresores Citel, Materiales Eléctricos, Suministros y Protección
- **¿Por qué elegirnos?** — Ventajas competitivas del negocio
- **Contacto** — Botón de WhatsApp y datos de contacto
- **Botón flotante** — Acceso rápido a WhatsApp desde cualquier sección

## 🛠️ Tecnologías

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- Diseño mobile-first y responsive
- Animaciones con IntersectionObserver + CSS

## 🚀 Correr localmente

```bash
npm install
npm run dev
```

## 📁 Estructura

```
src/
├── App.jsx                  # Config principal (número de WhatsApp aquí)
├── index.css                # Estilos globales + animaciones
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── Products.jsx
    ├── WhyUs.jsx
    ├── Contact.jsx
    ├── Footer.jsx
    ├── FloatingWhatsApp.jsx
    └── Logo.jsx
```

## ⚙️ Configuración

Para cambiar el número de WhatsApp, editar `src/App.jsx`:

```js
export const WA_NUMBER = '50660457842' // formato: 506 + número
```

## 👤 Autor

**Elias** — [@Elias1409](https://github.com/Elias1409)
