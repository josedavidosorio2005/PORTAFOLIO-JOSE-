# 🚀 Portfolio de Desarrollador

Un portfolio moderno y completamente animado para mostrar tus habilidades, certificados y proyectos como desarrollador.

## ✨ Características

- **Animaciones complejas** con GSAP y CSS avanzado
- **Cursor personalizado** con efectos interactivos
- **Partículas de fondo** con particles.js
- **Loader animado** con efectos visuales
- **Diseño responsive** para todos los dispositivos
- **Modal para certificados** con descarga simulada
- **Formulario de contacto** funcional
- **Efectos de scroll** y parallax
- **Tema oscuro moderno**
- **Optimizado para SEO**

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos avanzados con variables CSS y animaciones
- **JavaScript ES6+** - Lógica e interactividad
- **GSAP** - Animaciones profesionales
- **Particles.js** - Efectos de partículas
- **Font Awesome** - Iconos
- **Google Fonts** - Tipografía Poppins

## 📁 Estructura del Proyecto

```
portfolio/
├── index.html          # Página principal
├── styles.css          # Estilos y animaciones
├── script.js           # JavaScript e interactividad
├── README.md           # Documentación
├── package.json        # Dependencias (opcional)
├── .gitignore         # Archivos a ignorar
└── deploy/            # Archivos de despliegue
    ├── netlify.toml   # Configuración Netlify
    ├── vercel.json    # Configuración Vercel
    └── .github/       # GitHub Actions
```

## 🚀 Cómo Usar

### Instalación Local

1. **Clona o descarga** este repositorio
2. **Personaliza** el contenido:
   - Edita `index.html` con tu información personal
   - Reemplaza las imágenes placeholder
   - Modifica los colores en `:root` en `styles.css`
   - Actualiza los enlaces de redes sociales

3. **Sirve localmente**:
   ```bash
   # Con Live Server en VS Code
   # O con Python
   python -m http.server 8000
   
   # O con Node.js
   npx serve .
   ```

### 🌐 Despliegue Gratuito

#### Netlify (Recomendado)
1. Arrastra tu carpeta a [netlify.com/deploy](https://netlify.com/deploy)
2. O conecta tu repositorio de GitHub
3. ¡Listo! Tu sitio estará online

#### Vercel
1. Instala Vercel CLI: `npm i -g vercel`
2. En tu carpeta: `vercel`
3. Sigue las instrucciones

#### GitHub Pages
1. Sube tu código a GitHub
2. Ve a Settings > Pages
3. Selecciona la rama main
4. Tu sitio estará en `https://tuusuario.github.io/tu-repo`

## 🎨 Personalización

### Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary-color: #6366f1;    /* Color principal */
    --secondary-color: #f59e0b;  /* Color secundario */
    --accent-color: #10b981;     /* Color de acento */
}
```

### Contenido
- **Información personal**: Edita los textos en `index.html`
- **Certificados**: Reemplaza las imágenes placeholder
- **Proyectos**: Actualiza enlaces y descripciones
- **Habilidades**: Modifica las barras de progreso

### Animaciones
- **Velocidad**: Cambia `duration` en las animaciones GSAP
- **Efectos**: Modifica las funciones en `script.js`
- **Partículas**: Configura `particlesJS` para diferentes efectos

## 📱 Características Técnicas

### Performance
- **Carga lazy** de imágenes
- **CSS optimizado** con variables
- **JavaScript modular**
- **Compresión** automática

### SEO
- **Meta tags** optimizados
- **Estructura semántica**
- **Alt tags** en imágenes
- **Schema markup** (puedes agregar)

### Accesibilidad
- **Contrastes** adecuados
- **Navegación por teclado**
- **ARIA labels** (puedes mejorar)
- **Responsive design**

## 🔧 Scripts Disponibles

Si usas npm/yarn (opcional):

```bash
# Instalar dependencias de desarrollo
npm install

# Servir en desarrollo
npm run dev

# Construir para producción
npm run build

# Desplegar a Netlify
npm run deploy:netlify

# Desplegar a Vercel
npm run deploy:vercel
```

## 📋 Lista de Verificación

Antes de desplegar:

- [ ] Actualizar información personal
- [ ] Reemplazar imágenes placeholder
- [ ] Verificar enlaces de redes sociales
- [ ] Probar formulario de contacto
- [ ] Optimizar imágenes
- [ ] Validar HTML/CSS
- [ ] Probar en diferentes dispositivos
- [ ] Configurar dominio personalizado (opcional)

## 🎯 Próximas Mejoras

- [ ] Sistema de blog integrado
- [ ] Modo claro/oscuro
- [ ] Múltiples idiomas
- [ ] Integración con CMS
- [ ] PWA (Progressive Web App)
- [ ] Análiticas (Google Analytics)

## 🐛 Solución de Problemas

### Las animaciones no funcionan
- Verifica que GSAP se cargue correctamente
- Comprueba la consola por errores de JavaScript

### El sitio no es responsive
- Verifica los media queries en CSS
- Prueba en diferentes tamaños de pantalla

### Las partículas no aparecen
- Asegúrate de que particles.js se carga
- Verifica la configuración en `script.js`

## 📞 Soporte

Si tienes problemas:

1. **Revisa la consola** del navegador por errores
2. **Verifica** que todos los archivos estén en su lugar
3. **Prueba** en diferentes navegadores
4. **Consulta** la documentación de las librerías usadas

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo libremente para tus proyectos personales o comerciales.

## 🙏 Créditos

- **GSAP** - Animaciones profesionales
- **Particles.js** - Efectos de partículas
- **Font Awesome** - Iconos
- **Google Fonts** - Tipografía
- **Unsplash** - Imágenes de ejemplo (reemplazar por las tuyas)

---

⭐ **¡No olvides dar una estrella si te gustó el proyecto!**

🚀 **¡Hecho con ❤️ para desarrolladores!**
