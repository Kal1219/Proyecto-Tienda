# Tienda de Playeras de Maxzul_

Este proyecto es un sitio web para un creador de contenido (Maxzul_) que desea vender playeras personalizadas. El sitio incluye un frontend moderno y responsive, un backend con Node.js, MongoDB para la base de datos, Passport.js para la autenticación y la API de PayPal para los pagos.

## Características Principales

- **Frontend:**
  - Diseño moderno y responsive.
  - Carrusel automático de productos.
  - Sección "Sobre mí" con información del creador.
  - Videos promocionales en una cuadrícula.
  - Integración con redes sociales (Twitch, YouTube, Instagram).
  - Formulario de contacto.
  - Carrito de compras con pop-up.
  - Animaciones sutiles al hacer scroll.

- **Backend:**
  - API RESTful para gestionar productos.
  - Sistema de inventario para tallas y cantidades.
  - Autenticación con Passport.js.
  - Integración con PayPal para pagos.

## Tecnologías Utilizadas

- **Frontend:**
  - HTML5
  - CSS3 (con animaciones y diseño responsive)
  - JavaScript (manejo del DOM y carrito de compras)
  - Google Fonts (Roboto)

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (base de datos)
  - Passport.js (autenticación)
  - PayPal REST SDK (pagos)

## Estructura del Proyecto
/proyecto
│
├── /backend
│ ├── /models
│ │ └── Producto.js
│ ├── /routes
│ │ └── productos.js
│ ├── /config
│ │ └── db.js
│ ├── /controllers
│ │ └── productosController.js
│ ├── server.js
│ └── package.json
│
├── /frontend
│ ├── /css
│ │ └── styles.css
│ ├── /js
│ │ └── script.js
│ ├── /images
│ │ └── logo.svg
│ ├── index.html
│ └── carrito.html
│
└── README.md


## Instalación y Ejecución

### Requisitos Previos

- Node.js y npm instalados.
- MongoDB instalado y corriendo.
- Cuenta de PayPal para las pruebas de pago.

### Pasos para Ejecutar el Proyecto

1. **Clonar el Repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/tienda-maxzul.git
   cd tienda-maxzul
   ```

2. Instalar Dependencias del Backend:

    ```bash
    cd backend
    npm install
    ```
3. Configurar MongoDB:

    - Asegúrate de que MongoDB esté corriendo en tu máquina.

    - Puedes cambiar la cadena de conexión en backend/config/db.js si es necesario.

4. Configurar PayPal:

    - Crea una aplicación en el Developer Dashboard de PayPal.

    - Reemplaza TU_CLIENT_ID y TU_CLIENT_SECRET en backend/routes/pagos.js con tus credenciales.

5. Iniciar el Servidor Backend:

    ```bash
    node server.js
    ```

6. Abrir el Frontend:

    - Abre el archivo frontend/index.html en tu navegador.

7. Gestionar Productos:

    - Puedes agregar productos mediante la API RESTful en http://localhost:3000/api/productos.

### Uso

 - **Navegación:**

    - Utiliza el menú de navegación para explorar las diferentes secciones del  sitio.

    - Haz clic en el ícono del carrito para ver y gestionar tus compras.

- **Comprar Productos:**

    - Agrega productos al carrito y procede al pago con PayPal.

- **Contacto:**

    - Utiliza el formulario de contacto para enviar mensajes al creador.

### Contribuciones

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

    1. Haz un fork del repositorio.

    2. Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).

    3. Realiza tus cambios y haz commit (git commit -am 'Añade nueva funcionalidad').

    4. Haz push a la rama (git push origin feature/nueva-funcionalidad).

    5. Abre un Pull Request.

### Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

### Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

    - Nombre: [Kaleb Cortés Mejía]

    - Email: [kaleb.cortes1208@gmail.com]

    - GitHub: [https://github.com/Kal1219]

---


Este archivo `README.md` proporciona una descripción completa del proyecto, incluyendo las tecnologías utilizadas, la estructura del proyecto, instrucciones de instalación y ejecución, y cómo contribuir. Puedes personalizarlo según tus necesidades.