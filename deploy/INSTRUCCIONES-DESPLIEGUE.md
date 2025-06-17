# Instrucciones de Despliegue

Este documento proporciona instrucciones detalladas para desplegar el portafolio en diferentes plataformas.

## Plataformas disponibles

El portafolio está configurado para desplegarse en tres plataformas distintas:

1. **GitHub Pages** (Principal)
2. **Netlify** (Espejo)
3. **Vercel** (Espejo)

## Requisitos previos

Antes de realizar el despliegue, asegúrate de tener instalado:

1. Node.js y npm
2. Git
3. Cuenta en GitHub (con acceso al repositorio)
4. Cuenta en Netlify (opcional)
5. Cuenta en Vercel (opcional)

## Pasos para el despliegue

### 1. Despliegue en GitHub Pages

```bash
# Instalar dependencias si no están instaladas
npm install

# Desplegar a GitHub Pages
npm run deploy
```

Esto subirá el sitio a la rama `gh-pages` y lo publicará en la URL:
https://josedavidosorio2005.github.io/PORTAFOLIO-JOSE-/

### 2. Despliegue en Netlify

Primero, inicia sesión en Netlify usando la CLI:

```bash
npx netlify login
```

Una vez autenticado, despliega el sitio:

```bash
npm run deploy:netlify
```

El sitio estará disponible en:
https://josedavidosorio.netlify.app/

### 3. Despliegue en Vercel

Primero, inicia sesión en Vercel usando la CLI:

```bash
npx vercel login
```

Una vez autenticado, despliega el sitio:

```bash
npm run deploy:vercel
```

El sitio estará disponible en:
https://portafolio-jose.vercel.app/

### 4. Despliegue en todas las plataformas simultáneamente

Para desplegar en todas las plataformas con un solo comando:

```bash
npm run deploy:all
```

## Notas importantes

- Asegúrate de tener permisos de escritura en el repositorio de GitHub.
- Cada plataforma tiene sus propias limitaciones y características específicas.
- Los archivos de configuración para cada plataforma se encuentran en la carpeta `deploy/`.

## Solución de problemas

Si encuentras algún problema durante el despliegue:

1. Verifica tus credenciales en cada plataforma
2. Asegúrate de que todas las dependencias estén instaladas correctamente
3. Revisa los logs de error para identificar posibles problemas
4. Consulta la documentación oficial de cada plataforma para casos específicos
