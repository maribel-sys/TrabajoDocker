# Traer la imagen de node desde dockerhub
FROM node:12-alpine 
#creamos un directorio
WORKDIR /usr/src/app
COPY package*.json ./

#Para empezar a instalar todos los nodemodules que se van a necesitar
RUN npm install

#Copiar todo lo que esta en el nodemodules al directorio WORDIR
COPY . .

#Se expone el puerto en el 8080
EXPOSE 8080

#Se va a correr el comando para correr la aplicación
CMD ("node", "app.js")