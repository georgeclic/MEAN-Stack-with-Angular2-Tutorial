# Inicindo el repositorio en modo local con Git
$ git init

#-m es para incluir en este commit todo (massive)
$ git commit -m "primer commit" 

# añadiendo todos los archivos que haya en el directorio
$ git add . 

# Esta línea añade el repositorio creado e Github
$ git remote add origin https://github.com/georgeclic/MEAN-Stack-with-Angular2-Tutorial.git

# Añade el repositorio remoto (de Github) a la rama "master" (pedirá usuario y contraseña de la cuenta en ese servicio)
$ git push -u origin master

# Se crea una rama adicional (config-server) para trabajar en ella y dejar la rama 'master' como original
git checkout -b config-server

# Se crea el archivo JSON dentro del proyecto utilizando el gestor de paquetes de NodeJS
$ npm init

# Instalación de Express (--save incluye express entre las dependencias del archivo JSon)
npm install express --save

# Una vez Express está como dependencia, se procede a crear el servidor, para ello se pueden utilizar los comandos de la API de la página de Express (archivo 'index.js') y se crea el script en 'package.json' ("start": "node index.js")

# Para evitar tener que reiniciar el proceso "start" cada vez que se hace un cambio se utiliza 'nodemon' (la -g es para instalación global)
$ npm install -g nodemon
# NOTA IMPORTANTE si la versión de npm no es correcta en este paso dará error al instalara 'nodemon', para solucionar se puede probar a limpiar al caché de npm (1) o reinstalarlo cn la versión correcta (2)
# (1) $ npm cache clean --force
# (2) $ npm cache clear --force && npm install --no-shrinkwrap --update-binary

# Se inicia el servidor con 'nodemon'
$ nodemon index.js

# Iniciar la base de datos no-relacional (Mongo Database, en este caso)
$ mongod
# Se debe recordar que debe estar instalada de forma global para que se pueda ejecutar desde cualquier instancia de directorio.
# Para administrar esta BD se puede usar 'robomongo'
# Para generar la clave de la BD de datos (secret) se usa crypto nodejs

# Instalar mongoose...
$ npm install mongoose --save

# A continuación se debe instalar angular:
$ npm install -g @angular/cli
# Si falla la instalación (símbolo (token) no reconocido en el texto de origen) tratar desde el cmd de Windows...

# Ahora se ingresa a la carpeta donde se instaló Angular (en este caso se llama 'client')...
$ cd client

# Se crea el nuevo proyecto Angular
$ ng new client

# Una vez creado el nuevo proyecto, ingresar a la carpeta... Se inicia los servicios de Angular
$ ng serve
# Funciona desde el puerto 4200 (localhost:4200)

# A continuación se 'construyen' los módulos de la aplicación
$ ng build


