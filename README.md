# Papyrus Social Network 
## Resumen

Papyrus nació pensando en una red social donde las personas puedan compartir recursos educativos (cursos, preguntas sobre algun tema en específico, artículos, etc.) 

Papyrus permite que cualquier usuario pueda crear una cuenta de acceso y loguearse con ella; crear, editar, borrar y "likear" publicacciones.

El objetivo principal de aprendizaje de este proyecto es construir una Single-page Application (SPA) responsive (con más de una vista / página) en la que podamos leer y escribir datos.

## Historias de usuario

Con la motivación de mejorar nuestro producto, planteamos las siguientes historias de usuario:

### Historia de usuario 1
Yo como usuario quiero visualizar las opciones que me permitan registrarme (por correo o por una cuenta Google) e iniciar sesión si ya tengo creada una cuenta para poder acceder a la aplicación. 
* Criterios de aceptación:
    * Que el usuario pueda ver la opción para registrarse por medio de un correo.
    * Que el usuario pueda ver la opción para registrarse por medio de una cuenta Google. 
    * Que el usuario pueda ver la opción de iniciar sesión si ya tiene una cuenta creada.
* Definición de terminado
    * Que esta vista sea responsive.
    * Cumple con las guías de diseño aprobadas (CSS).
    * Se realizaron los testeos de usabilidad y recibimos feedback.
    * Se hizo pair programming.
    * El código esta en la rama main del repositorio de todas.

### Historia de usuario 2
Yo como usuario quiero registrarme en la aplicación por medio de mi correo para tener un perfil y poder publicar post sobre recursos educativos virtuales.
* Criterios de aceptación:
    * Que el usuario pueda ver el formulario de registro.
    * Que el usuario pueda ingresar su correo y este sea validado. 
    * Que el usuario pueda ingresar su contraseña, que esta sea secreta y tenga al menos 6 caracteres.
    * Que el usuario pueda validar su información de registro por medio de un botón que hará que reciba un correo para confirmar su registro.
* Definición de terminado
    * Está la estructura HTML.
    * Es SPA.
    * Cumple con las guías de diseño aprobadas (CSS).
    * Las funciones en el JS cumplen con su tarea.
    * Autenticación de Firebase funciona correctamente.
    * Está debidamente ruteado.
    * Se realizaron los testeos de usabilidad y recibimos feedback.
    * Se hizo pair programming.
    * El código esta en la rama main del repositorio de todas.

### Historia de usuario 3
Yo como usuario que ya tengo con una cuenta Google quiero continuar el proceso de registro con este correo para poder acceder a la aplicación.
* Criterios de aceptación:
    * Que el usuario pueda escoger la cuenta Google con la que desea continuar el proceso de registro.
    * Que el usuario al escoger su cuenta Google pueda visualizar el modal que le da la bienvenida a nuestra aplicación. 
* Definición de terminado
    * Está la estructura HTML.
    * Es SPA.
    * Cumple con las guías de diseño aprobadas (CSS).
    * Las funciones en el JS cumplen con su tarea.
    * Autenticación de Firebase funciona correctamente.
    * Está debidamente ruteado.
    * Se realizaron los testeos de usabilidad y recibimos feedback.
    * Se hizo pair programming.
    * El código esta en la rama main del repositorio de todas.

### Historia de usuario 4
Yo como usuario quiero poder iniciar sesión si ya tengo una cuenta registrada para acceder a la aplicación. 
* Criterios de aceptación:
    * Que el usuario al iniciar sesión pueda validar si ya está registrado o no.
    * Que usuario a dar click en 'Sign in' pueda visualizar un formulario
    * Que el usuario pueda ingresar su correo y su contraseña.
    * Que el usuario pueda acceder al Home cuando da click en el botón 'continuar'. 
* Definición de terminado
    * Está la estructura HTML.
    * Es SPA.
    * Cumple con las guías de diseño aprobadas (CSS).
    * Las funciones en el JS cumplen con su tarea.
    * Autenticación de Firebase funciona correctamente.
    * Está debidamente ruteado.
    * Se realizaron los testeos de usabilidad y recibimos feedback.
    * Se hizo pair programming.
    * El código esta en la rama main del repositorio de todas.

### Historia de usuario 5
Yo como usuario quiero visualizar las opciones que me permitan publicar posts, editarlos, que otros usuarios puedan darle 'me gusta' y eliminarlos para poder interactuar con otros usuarios de la aplicación. 
* Criterios de aceptación:
    * Que el usuario pueda ver la opción para 'escribir' el post.
    * Que el usuario pueda ver la opción para 'publicar' su post.
    * Que el usuario pueda ver la opción para 'editar' su post.
    * Que el usuario pueda ver la opción para dar 'me gusta'.
    * Que el usuario pueda ver la opción para eliminar su post.
* Definición de terminado
    * Que sea responsive.
    * Está la estructura HTML.
    * Es SPA.
    * Cumple con las guías de diseño aprobadas (CSS).
    * Las funciones en el JS cumplen con su tarea.
    * Autenticación de Firebase funciona correctamente.
    * Está debidamente ruteado.
    * Se realizaron los testeos de usabilidad y recibimos feedback.
    * Se hizo pair programming.
    * El código esta en la rama main del repositorio de todas.

### Historia de usuario 6
Yo como usuario quiero poder hacer un post para compartir recursos educativos, preguntas, etc. 
* Criterios de aceptación:
    * Que el usuario pueda publicar un post y aparezca en el muro.
    * Que el usuario pueda editar su propia publicación.
    * Que el usuario pueda eliminar su propia publicación.
    * Que el usuario pueda dar me gusta a otras publicaciones.
* Definición de terminado
    * Que sea responsive.
    * Es SPA.
    * Está la estructura HTML.
    * Cumple con las guías de diseño aprobadas (CSS).
    * Las funciones en el JS cumplen con su tarea.
    * Autenticación de Firebase funciona correctamente.
    * Está debidamente ruteado.
    * Se realizaron los testeos de usabilidad y recibimos feedback.
    * Se hizo pair programming.
    * El código esta en la rama main del repositorio de todas.

### Historia de usuario 7
Yo como usuario quiero cerrar sesión para tener mayor seguridad con mi cuenta. 
* Criterios de aceptación:
    * Que el usuario pueda ver la opción para cerrar sesión.
    * Que el usuario pueda salir de su sesión al dar clic en un botón.
* Definición de terminado
    * Que sea responsive.
    * Es SPA.
    * Está la estructura HTML.
    * Cumple con las guías de diseño aprobadas (CSS).
    * Las funciones en el JS cumplen con su tarea.
    * Autenticación de Firebase funciona correctamente.
    * Está debidamente ruteado.
    * Se realizaron los testeos de usabilidad y recibimos feedback.
    * Se hizo pair programming.
    * El código esta en la rama main del repositorio de todas.

## Tecnologías implementadas

Para el desarrollo de este proyecto usamos:
* [FIREBASE](https://firebase.google.com/?hl=es) 
* [JAVASCRIPT | HTML | CSS ](https://developer.mozilla.org/es/docs/Web/JavaScript) 
* [NPM ](https://www.npmjs.com/) 

## Boilerplate

```text
./
├── .eslintrc babelrc
├── .gitignore
├── README.md
├── .babel.config.js
├── package.json
├── stylelint.config.js
├── src
│   ├── images
│   │   ├── Logo.png
│   │   ├── Logo.svg
│   │   └── Nave3.png
│   ├── lib
│   │   ├── _mocks_
│   │   │   └── firebase-imports.js
│   │   ├── buttons.js
│   │   ├── components.js
│   │   ├── firebase-imports.js
│   │   ├── firebase.js
│   │   ├── post.js
│   │   ├── signIn.js
│   │   ├── signUp.js
│   │   └── viewController.js
│   ├── index.html
│   ├── main.js
│   └── styles.css
└── test
    ├── post.spec.js
    └── signIn.spec.js
```

## Diseño de la Interfaz de Usuario

A continuación, se muestra el prototipo de baja fidelidad maquetado en Figma:


## Autores ✒️

* **Paula Quintero** 
* **Camila Cortes** 
* **Viviana Perez** 


## Gracias al equipo de Laboratoria que nos estuvo acompañando en este proyecto y nos ayudaron a solucionar muchas dudas. 


---
