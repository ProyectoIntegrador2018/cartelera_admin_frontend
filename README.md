# Cartelera i - Admin Frontend

[![Maintainability](https://api.codeclimate.com/v1/badges/c13dcd16aef89f074850/maintainability)](https://codeclimate.com/github/ProyectoIntegrador2018/cartelera_admin_frontend/maintainability)

Este es el repositorio de "Cartelera de Innovación - Public" para el Tec de Monterrey,
un proyecto que listará eventos próximos a suceder dentro del Tec. Esta parte del 
proyecto actuará como interfaz para administradores, sponsors y solicitantes, usuarios
que pueden crear y editar eventos para el frontend público.

## Tabla de Contenidos

* [Detalles del Cliente](#detalles-del-cliente)
* [URLs de Ambiente](#urls-de-ambiente)
* [Equipo](#equipo)
* [Recursos de Mantenimiento](#recursos-de-mantenimiento)
* [Setup del Proyecto](#setup-del-proyecto)
* [Correr el Proyecto para Desarrollo](#correr-el-proyecto-para-desarrollo)
* [Detener el proyecto](#detener-el-proyecto)
* [Contribuciones](#contribuciones)


### Detalles del Cliente

| Nombre                       | Email                    | Rol                 |
| ---------------------------- | ------------------------ | ------------------- |
| Julio Noriega                | jnoriega@itesm.mx        | Cliente             |
| A Diaz de Leon               | adiazdeleon@itesm.mx     | Asociado al Cliente |
| Azael Jesus Cortes Capetillo | azael.capetillo@itesm.mx | Asociado al Cliente |


### URLs de Ambiente

* **Producción** - [Sitio en producción](https://cartelerai-admin.herokuapp.com)
* **Desarrollo** - Maquina Local

### Equipo

| Nombre                           | Email                   | Rol                        |
| -------------------------------- | ----------------------- | -------------------------- |
| Alvaro Ramírez Rosselló          | A00814982@itesm.mx      | Backend Developer          |
| Diego Adolfo José Villa          | A00815260@itesm.mx      | Frontend Developer         |
| Julio Mauricio Noriega Reséndiz  | A01273613@itesm.mx      | Frontend Developer         |
| Luis Carlos Flores Gallardo      | A01196081@itesm.mx      | Backend Developer/DevOps   |
| Luis Uriel Ávila Vargas          | A00815578@itesm.mx      | Frontend Developer         |

### Recursos de Mantenimiento

Se debe preguntar por las credenciales necesarias en caso de no tenerlas:

* [Github repo](https://github.com/ProyectoIntegrador2018/cartelera_admin_frontend)
* [Backlog](https://github.com/ProyectoIntegrador2018/cartelera_backend/projects)
* [Heroku](https://cartelerai-admin.herokuapp.com/)
* [Documentación] **Revisar archivos proporcionados por el profesor**

## Desarrollo

### Setup del Proyecto

Para poder correr el cliente, es necesario tener [npm](https://www.npmjs.com/).

Despues de instalar todo lo anterior, sigue estos pasos para hacer el setup del proyecto:

1. Clona este repositorio en la computadora en donde se va a desarrollar:

```bash
$ git clone https://github.com/ProyectoIntegrador2018/cartelera_admin_frontend.git
```
2. El desarrollo se hizo usando React, y el diseño del sitio con SASS.
Manten todos los paquetes del proyecto actualizados con:

```bash
$ npm update
```

3. Instala todas las dependencias con:

```bash
$ npm install
```

### Correr el Proyecto para Desarrollo

1. Abre la terminal y corre el siguiente comando:

```bash
$ npm start
```

Este comando iniciara el servidor localmente en tu localhost en el puerto 5000.

Si se despliega la siguiente información:

```
Project is running at http://0.0.0.0:5000/
webpack output is served from /
Content not from webpack is served from ./src/public
```

Significa que el proyecto esta corriendo.

### Detener el Proyecto

Para detener el servidor simplemente oprime estas teclas:

```
% CTRL+C
```

## Contribuciones

Porfavor contribuye con [Github Flow](https://guides.github.com/introduction/flow/). Crea una branch, agrega commits, y [abre un pull request](https://github.com/ProyectoIntegrador2018/cartelera_admin_frontend/pulls).
