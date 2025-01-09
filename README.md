# Pandora

my-component-library/
├── public/                     # Archivos estáticos (si se necesitan)
│   └── index.html              # HTML principal
├── src/                        # Código fuente
│   ├── assets/                 # Archivos estáticos como imágenes, fuentes, etc.
│   ├── components/             # Componentes UI siguiendo Atomic Design
│   │   ├── atoms/              # Componentes pequeños e independientes
│   │   │   ├── Button/         # Átomo: componente botón
│   │   │   │   ├── variants/   # Variantes del botón (ej. primary, secondary)
│   │   │   │   │   ├── PrimaryButton.tsx
│   │   │   │   │   ├── SecondaryButton.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   └── Button.tsx  # Componente base para el botón
│   │   │   ├── Button.stories.tsx  # Historia para documentar el componente Button
│   │   │   ├── Input/          # Átomo: componente input
│   │   │   └── ...
│   │   ├── molecules/          # Combinación de átomos
│   │   │   ├── FormField/      # Ejemplo de molécula: un input con label
│   │   │   ├── Card/           # Molécula: Card que puede tener diferentes variantes
│   │   │   │   ├── variants/   # Variantes de la tarjeta (ej. normal, con sombra)
│   │   │   │   │   ├── CardWithShadow.tsx
│   │   │   │   │   ├── NormalCard.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   └── Card.stories.tsx  # Historia para documentar el componente Card
│   │   │   └── ...
│   │   ├── organisms/          # Combinaciones más complejas de átomos y moléculas
│   │   │   ├── Navbar/         # Ejemplo de organismo: menú con múltiples variantes
│   │   │   │   ├── HorizontalNavbar.tsx
│   │   │   │   ├── VerticalNavbar.tsx
│   │   │   │   └── index.ts
│   │   │   │   └── Navbar.stories.tsx  # Historia para documentar el componente Navbar
│   │   │   └── ...
│   │   ├── templates/          # Plantillas de disposición para páginas
│   │   ├── pages/              # Páginas completas para mostrar componentes
│   ├── domains/                # Agrupación por funcionalidades del sistema
│   │   ├── ui/                 # Componentes comunes a la UI
│   │   ├── forms/              # Componentes relacionados con formularios
│   │   └── ...
│   ├── hooks/                  # Custom hooks
│   ├── styles/                 # Archivos CSS/Tailwind
│   │   ├── tailwind.config.js  # Configuración de Tailwind
│   │   └── globals.css         # Estilos globales
│   ├── utils/                  # Funciones de utilidad
│   ├── index.tsx               # Punto de entrada de React (si necesario para desarrollo)
│   ├── App.tsx                 # Componente principal de la librería
│   └── routes.tsx              # Rutas si son necesarias para algún ejemplo o documentación
├── dist/                       # Archivos compilados para producción
├── tests/                      # Pruebas
│   ├── components/             # Pruebas de componentes UI
│   ├── hooks/                  # Pruebas de hooks
│   └── utils/                  # Pruebas de utilidades
├── .gitignore                  # Archivos que no deben subirse al repo
├── package.json                # Dependencias y scripts
├── tsconfig.json               # Configuración de TypeScript
├── .storybook/                 # Carpeta de configuración de Storybook
│   ├── main.js                 # Configuración principal de Storybook
│   ├── preview.js              # Configuración del entorno de Storybook
│   └── manager.js              # Opcional, configuración de la interfaz de usuario de Storybook
├── README.md                   # Documentación del proyecto
└── stories/                    # Opcional: Carpeta de ejemplo para probar la librería en Storybook
