# Studio Rosso Agency

Agencia de diseño y desarrollo web en Colombia. Creamos marcas que se sienten, se ven y venden.

## 🚀 Estructura del Proyecto

```
StudioRosso/
├── src/                    # Frontend React
│   ├── Components/         # Componentes reutilizables
│   ├── Pages/             # Páginas principales
│   ├── hooks/             # Hooks personalizados
│   ├── utils/             # Funciones de utilidad
│   ├── fonts.css          # Configuración de fuentes
│   └── index.css          # Estilos globales
├── Backend/                # Servidor Express (opcional)
├── public/                 # Archivos estáticos
│   ├── img/               # Imágenes del proyecto
│   └── fonts/             # Fuentes personalizadas
└── dist/                   # Build de producción
```

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **TailwindCSS** - Framework de CSS
- **React Router** - Enrutamiento
- **React Hook Form** - Manejo de formularios
- **Zod** - Validación de esquemas

### Fuentes
- **Dream Orphans** - Títulos (Display)
- **Montserrat** - Texto del cuerpo

## 📦 Instalación y Ejecución

### Frontend (Recomendado para desarrollo)
```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

### Backend (Opcional - para formularios)
```bash
cd Backend
npm install
npm run dev
```

## 🎨 Características

- ✅ **Diseño Responsive** - Optimizado para todos los dispositivos
- ✅ **Tipografía Personalizada** - Dream Orphans + Montserrat
- ✅ **Navegación Inteligente** - Scroll automático al top
- ✅ **SEO Optimizado** - Meta tags y estructura semántica
- ✅ **Formularios Avanzados** - Validación y manejo de estado
- ✅ **Performance** - Lazy loading y optimizaciones

## 🌐 Despliegue

El proyecto está configurado para desplegarse en **Vercel** con optimizaciones automáticas.

## 📱 Páginas

- **Home** - Página principal con servicios destacados
- **Servicios** - Catálogo completo de servicios
- **Nosotros** - Información del equipo
- **Contacto** - Formulario de contacto

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run preview` - Preview del build
- `npm run lint` - Linting del código

## 📁 Archivos Importantes

- `tailwind.config.js` - Configuración de TailwindCSS
- `vite.config.js` - Configuración de Vite
- `vercel.json` - Configuración de Vercel
- `src/fonts.css` - Configuración de fuentes personalizadas

## 🚀 Optimizaciones Implementadas

- **Bundle Splitting** - Código dividido por rutas
- **Image Optimization** - Imágenes optimizadas y lazy loading
- **Font Loading** - Fuentes con `font-display: swap`
- **Code Splitting** - Componentes cargados bajo demanda
- **Performance Monitoring** - Vercel Speed Insights integrado
