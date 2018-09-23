# Deployment de CarteleraI Admin

Este documento fue creado con la finalidad de facilitar el proceso de deployment para el proyecto de CarteleraI Public. A continuación se muestran los pasos a seguir para lograrlo.

### Requisitos

* Node 8.11.4
* Npm 6.4.0
* Git
* Cuenta en Heroku
* Heroku CLI
* Cuenta en Docker
* Docker app

El proyecto esta creado sobre NodeJS/React, por lo que es necesario tener esas herramientas con las versiones ya presentadas anteriormente.

Para descargar el proyecto, es necesario descargar el repositorio al directorio que prefiera mas en su computadora. En terminal, descarga el repositorio
```bash
$ git clone git@github.com:ProyectoIntegrador2018/cartelera_admin_frontend.git
```

Despues de haberlo descargado, asegurese de entrar al directorio.
```bash
$ cd cartelera_admin_frontend
```

Ya dentro del directorio, se instalan todas las dependencias necesarias para el proyecto con
```bash
$ npm install
```

El proceso toma un tiempo, hay que ser pacientes.


### Heroku CLI

El proyecto esta hosteado en el sitio Heroku, por lo que si se desea hacer un deploy en el mismo sitio, es necesario seguir los siguientes pasos

Para poder conectar nuestro proyecto con Heroku, es necesario descargar [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) y hacer login con nuestras credenciales
```bash
$ heroku login
```

Despues de habernos loggeado, tendremos que instalar las dependencias nuevamente, por si se hicieron nuevos cambios al package.json
```bash
$ npm install
```

Ya teniendo configurado Heroku, podemos proceder a crear nuestro sitio web.

### Configuración de Docker

Docker es un sitio en donde se almacenan contenedores, los cuales utilizamos para poder correr este proyecto con las condiciones ideales.

Para comenzar con la configuración de Docker, es necesario hacer una cuenta con [Docker](https://hub.docker.com/)

Despues de tener una cuenta, es necesario descargar la [aplicación de escritorio de Docker](https://www.docker.com/products/docker-desktop), para poder trabajar desde la terminal.

Al ya tener instalado Docker en tu computadora, debemos dar login a Docker desde la terminal con:

```bash
$ docker login
```

Y despues hacer login con Heroku con el siguiente comando:
```bash
$ heroku container:login
```

### Subir a Heroku

Dentro del directorio del proyecto, se crea un sitio con Heroku de la siguiente manera:
```bash
$ heroku create
Creating app... done, secret-reef-24871
https://secret-reef-24871.herokuapp.com/ | https://git.heroku.com/secret-reef-24871.git
```

El comando anterior crea dos URLs, el primero con el sitio en donde la aplicación es hosteada, y el segundo que es el repositorio en Heroku.

Una vez creado el sitio, es hora de subir nuestra aplicación. Se utiliza el siguiente comando:
```bash
$ heroku container:push web
```

El comando anterior sube la imagen que Docker tiene sobre el proyecto a Heroku. Para darle deploy a la imagen usamos:
```bash
$ heroku container:release web
```

Este comando tambien tomara un tiempo, pero despues de que termine de ejecutarse, puedes revisar que el API funciona con:
```bash
$ heroku open
```
