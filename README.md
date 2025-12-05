# Proyecto: Imagen Interactiva con Botones

Este proyecto es una página web sencilla que permite **aumentar el tamaño de una imagen progresivamente** cada vez que el usuario hace clic en un botón. También incluye un botón para **restablecer** la imagen a su tamaño normal.

El diseño sigue buenas prácticas usando **HTML, CSS y JavaScript separados**.

---

## 🖼️ Funcionalidad principal

- **Aumentar imagen:** Cada clic incrementa el tamaño usando `transform: scale()`.
- **Restablecer tamaño:** La imagen vuelve a su escala original (`scale(1)`).
- **Animaciones suaves:** La transición es fluida gracias a `transition` en CSS.
- **Botones siempre visibles:** El contenedor evita que la imagen crecida tape los botones.
- **Diseño limpio:** Todo está organizado en carpetas (`css/`, `js/`).

---

## 📂 Estructura del proyecto


/css
styles.css
/js
app.js
index.html
README.md


---

## 📄 Archivos principales

### 1. **index.html**
Estructura principal de la página.  
Incluye:
- contenedor
- caja para la imagen
- botones de interacción
- enlace a CSS y JS

---

### 2. **styles.css**
Define:
- estilos del contenedor
- estilo y transición de la imagen
- botones con efectos visuales
- espacio dedicado para que la imagen pueda crecer sin cubrir los botones

---

### 3. **app.js**
Controla la lógica:
- variable `escala` que aumenta 0.2 en cada clic
- función para restablecer la escala a 1

---

## 🚀 Cómo usarlo

1. Clona o descarga este proyecto.
2. Abre **index.html** en un navegador.
3. Haz clic en **Aumentar** para incrementar el tamaño de la imagen.
4. Haz clic en **Normal** para restaurar su tamaño original.

---

## 🛠️ Tecnologías usadas

- **HTML5**
- **CSS3** (transiciones, layout)
- **JavaScript Vanilla** (sin frameworks)

---

## 📌 Mejoras futuras (opcionales)

- Botón para disminuir la imagen.
- Establecer un tamaño máximo.
- Animaciones más avanzadas.
- Modo oscuro.
- Guardar el tamaño seleccionado con `localStorage`.

---

## Autor

Emanuel

Proyecto creado para práctica de manejo de imágenes dinámicas con JavaScript.

# Imagen Interactiva con Botones

## Descripción
Pequeña página web que permite interactuar con una imagen: aumentarla progresivamente, reducirla y volverla a su tamaño original. La página incluye transiciones suaves, controles accesibles y un layout que evita que la imagen tape los botones.

## Objetivos
- Practicar control del DOM con JavaScript.
- Implementar interacciones progresivas (`scale`) y límites.
- Aprender flujo de trabajo con Git: ramas, commits y Pull Requests.
- Mantener buenas prácticas de accesibilidad y estructura de proyecto.

## Requisitos básicos
- Navegador moderno (Chrome, Firefox, Edge).
- Git instalado.
- (Opcional) GitHub account.

## Estructura del proyecto
