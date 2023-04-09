# FilmFinder App with Next.js 13

Esta aplicación muestra una lista de películas obtenidas de la API The Movie DB. Las películas se dividen en las más populares y las de estreno. Al hacer clic en una de ellas, se muestran los detalles de la película, como el reparto y la sinopsis. La aplicación está construida con Next.js 13, Tailwind y Typescript.

## 🚨Prerrequisitos

Antes de comenzar, asegúrese de tener instalado lo siguiente en su computadora:

- Node.js (versión 12 o posterior): https://nodejs.org

## ✅Comenzando

Para empezar con la aplicación, sigue estos pasos:

1. Clona el repositorio en tu máquina local utilizando el siguiente comando:

```bash
git clone git@github.com:johnazt/filmfinder-page.git
```

2. En el directorio del proyecto instala las dependencias utilizando el siguiente comando:

```bash
npm install
```

3. Crea un archivo `.env.local` en la raíz del proyecto.

4. Agrega las siguientes variables de entorno en el archivo:

```bash
NEXT_PUBLIC_API_KEY=<tu API key de The Movie DB>
NEXT_PUBLIC_BASE_URL=https://image.tmdb.org/t/p/
```

5. Reemplaza `<tu API key de The Movie DB>` con tu API key real obtenida de The Movie DB. No compartas esta API key en público.

- Crea tu cuenta y obtén la API key [aquí](https://www.themoviedb.org/)

6. Luego inicia la aplicación ingresando en la terminal:

```bash
npm run dev
```

7. Abre tu navegador web y navega a `http://localhost:3000` para utilizar la aplicación.

## 📌Funcionalidades

- Lista de las películas más populares.
- Lista de las películas de estreno.
- Detalles de cada película, incluyendo el reparto y la sinopsis.

## ⭐️Tecnologías Utilizadas

- React,js
- Next.js 13
- TypeScript
- TailwindCSS
- Node.js
- Eslint
- Husky

## Créditos

Esta aplicación FilmFinder fue desarrollada por [John Asto](https://github.com/johnazt).

## Contacto

Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto conmigo en [john.azt.dev@gmail.com](mailto:tu-correo@ejemplo.com).

---

## Portafolio

Puedes ver algunos de mis otros proyectos [aquí](https://johnasto.netlify.app/).
