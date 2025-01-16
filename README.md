# Pandora Components

## Versions

### V0.0.1

- **Instalación de la librería**

```shell
yarn add pandora_components
```

- **Importación de estilos**

Esta importación se realiza en el archivo que renderiza los componentes (`main.tsx`):

```javascript
import 'pandora_components/dist/style.css'
```

- **Uso de los componentes**

Importa el componente que desees utilizar:

```javascript
import { ButtonPrimary, ButtonSecondary, ButtonText } from 'pandora_components'
```

### Ejemplos de uso:

**Botón Primario:**

```jsx
<ButtonPrimary.ButtonPrimary></ButtonPrimary.ButtonPrimary>
```

**Botón Primario con Hover:**

```jsx
<ButtonPrimary.ButtonPrimaryHover></ButtonPrimary.ButtonPrimaryHover>
```

**Botón Secundario:**

```jsx
<ButtonSecondary.ButtonSecondary></ButtonSecondary.ButtonSecondary>
```

**Botón de Texto:**

```jsx
<ButtonText.ButtonText></ButtonText.ButtonText>
```

> **Nota:** Al utilizar un componente, asegúrate de especificar el tipo de botón correspondiente, como `ButtonPrimaryHover` para estados interactivos.

