# Turo · Steakhouse Premium — Web

Sitio oficial de **Turo**, steakhouse premium en Santo Domingo.
Cortes USDA Prime & Black Angus · horno Josper · raw bar · maridajes de autor.

Stack: **React 19 + TypeScript + Vite 7 + Framer Motion + React Router 7**.

## 🚀 Comandos

```bash
npm install          # instalar dependencias
npm run dev          # arranca en http://localhost:5173
npm run build        # build de producción → /dist
npm run preview      # preview del build local
```

## 📁 Estructura

```
src/
├── components/      # CustomCursor, RevealText, MagneticButton, AnimatedCounter, Navbar, Footer, WhatsAppFab
├── sections/        # Hero, MenuTeaser, Chef, EventsTeaser, Gallery, Visit
├── pages/           # Home, MenuIndex, Reservaciones, Eventos, NotFound, menu/CategoryPage
├── data/
│   ├── menu.ts      # ← editá aquí precios, fotos y dishes
│   └── events.ts    # ← editá aquí la experiencia/cena destacada
├── hooks/           # useParallax
├── utils/           # easings, motionVariants
└── styles/global.css

public/assets/
├── img/             # carne*, espacio*, food*, postre*, heros.jpg
└── videos/          # hero.mp4, category.mp4
```

## ✏️ Cómo editar

### Cambiar la experiencia destacada
1. Subí la imagen nueva a `public/assets/img/`
2. Editá `CURRENT_EVENT` en `src/data/events.ts`

### Agregar foto real a un plato
En `src/data/menu.ts`, en el dish:
```ts
{ name: 'Ribeye USDA Prime 16oz', image: '/assets/img/ribeye-real.jpg' }
```

### Cambiar info del negocio
`SITE` const al final de `src/data/menu.ts` (teléfono, dirección, horarios, IG, WhatsApp, URL de reservas).

## 🎨 Sistema visual

- **Tipografía:** Fraunces (display chunky), Cormorant Garamond (serif elegante), Inter (body)
- **Paleta:** `#0a0706` (negro brasa) · `#b87333` (cobre Turo) · `#f5ede1` (cream)
- **Motion stack:** cursor magnético + reveal por palabra + parallax + stagger en grids

## 📍 Contacto

- WhatsApp: [wa.me/18097845211](https://wa.me/18097845211)
- IG: [@turo.rd](https://www.instagram.com/turo.rd/)
- Reservas online: [appointment.inflo.business/diezton/reservation](https://appointment.inflo.business/diezton/reservation?step=service)
- Dirección: Calle Andrés Julio Aybar #25, Piantini · Santo Domingo

---

*Diseño & desarrollo: NEXIX Tech Studio · Basado en la arquitectura visual de 787 Gastro Bar.*
