-- Qué características hacen que esta sea una API REST.
implementa las siguientes funciones
- `GET /productos` → Lista todos los productos.
- `POST /productos` → Agrega un nuevo producto.
- `GET /productos/:id` → Obtiene un producto por ID.
- `PUT /productos/:id` → Actualiza un producto por ID.
- `DELETE /productos/:id` → Elimina un producto por ID.

plantea la siguiente estructura
tp5-rest-api/
│
├── controllers/        → Lógica de negocio
├── models/             → Acceso a datos
├── routes/             → Endpoints REST
├── data/               → Archivo JSON simula una base de datos
├── app.js              → Configuración de Express
└── package.json


-- Diferencias con la arquitectura de 3 capas anterior

En la versión anterior del trabajo, la aplicación también estaba dividida en tres capas (controlador, modelo y acceso a datos), pero no estaba pensada como una API. Era más como una estructura interna, sin endpoints ni uso del protocolo HTTP.

En cambio, ahora cada función está expuesta a través de un endpoint REST, y se puede acceder desde cualquier cliente, como una app web o Postman. Todo está más organizado y enfocado a trabajar como servicio, usando JSON para intercambiar información. La lógica y la separación de responsabilidades se mantienen, pero se adaptaron para cumplir con las reglas de una API REST.
