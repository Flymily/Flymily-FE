
![flymily-logo](https://github.com/user-attachments/assets/a784088f-bcfd-4f17-bc2d-f5624abaf697)

# ✈ Flymily Frontend

Frontend oficial de **Flymily**, una aplicación web para una agencia de viajes. Este proyecto permite a los usuarios explorar viajes, leer artículos en la comunidad, y a las administradoras gestionar contenido mediante un panel de control exclusivo.

---

## 🚀 Tecnologías utilizadas

- **React + Vite**
- **CSS Modules** para estilos locales
- **React Router** para navegación SPA
- **Axios** para llamadas HTTP
- **React Hook Form** para manejo de formularios
- **React Icons** y **Lucide React** para iconografía
- **React Slick** para sliders de contenido
- **React DatePicker** para selección de fechas
- **Playwright** para testing e2e

---

## 📁 Estructura del Proyecto

```
Flymily-FE
│   App.jsx
│   index.css
│   main.jsx
│
├───assets
│   ├───data
│   │       sliderData.js
│   └───images
│           *.jpg, *.png (imágenes de la interfaz)
│
├───components
│   ├───admin (componentes del panel admin)
│   ├───boton-suscripcion
│   ├───footer
│   └───navbar
│
├───pages
│   ├───admin
│   ├───buscador
│   ├───comunidad
│   ├───contacto
│   ├───home
│   ├───login
│   ├───quienesSomos
│   └───viajes
│
├───services
│       api.js
│       viajes.js
```

---

## 🔐 Autenticación

- Solo administradoras tienen acceso al panel admin.
- Login mediante formulario que se comunica con el backend (Spring Boot).
- Las rutas del panel de gestión están protegidas mediante lógica de frontend.

---

## 🌐 Páginas principales

- **Home**: Portada visual con slider y llamadas a la acción.
- **Viajes**: Explora todos los viajes disponibles.
- **Buscador**: Filtrado avanzado de viajes.
- **Comunidad**: Artículos y consejos.
- **Login**: Acceso exclusivo para administradoras.
- **Panel Admin**: CRUD de viajes, artículos y secciones internas.
- **Contacto / Quiénes Somos**: Páginas estáticas informativas.

---

## 🧪 Testing

Este frontend está preparado para pruebas end-to-end usando **Playwright**.

```bash
npm install -D playwright
npx playwright test
```

---

## 📦 Instalación y uso local

### Requisitos

- Node.js 18+
- npm 9+

### Clonación

```bash
git clone https://github.com/Flymily/Flymily-FE.git
cd Flymily-FE
```

### Instalación de dependencias

```bash
npm install
npm install axios
npm i react-router
npm install react-hook-form
npm install react-icons
npm install react-slick slick-carousel
npm install react-datepicker
npm install lucide-react


```

### Configuración del archivo `.env`

Crea un archivo `.env` en la raíz con la URL de la API del backend:

```env
VITE_API_URL=http://localhost:8080
```

> ⚠️ Asegúrate de que `.env` está incluido en `.gitignore` para evitar subir información sensible.

### Ejecución del proyecto

```bash
npm run dev
```

Abre tu navegador en [http://localhost:5173](http://localhost:5173)

---

## 📬 Uso del Frontend

1. El usuario navega por las páginas públicas.
2. Las administradoras acceden a `/login` y, tras autenticarse, acceden al panel admin.
3. El frontend se comunica con el backend Flymily mediante Axios.

---

## 🤝 Equipo de desarrollo

| Nombre completo        | Perfil de LinkedIn                               |
|------------------------|--------------------------------------------------|
| Priscila Guillén       | (https://linkedin.com/in/priscilaguillen)        |
| Guadalupe Hani         | (https://linkedin.com/in/guadalupe-hani)         |
| Miriam Sánchez         | (https://linkedin.com/in/miriam-sanchez-ordoñez) |
| Israel Espin           | (https://linkedin.com/in/israelespin)            |


---

## 📚 Licencia

Este proyecto está bajo la licencia **MIT**. Puedes consultarla en el archivo `LICENSE` para más información.

---

Gracias por visitar el frontend de **Flymily**. Para cualquier colaboración, puedes contactarnos en nuestros perfiles de LinkedIn.