# Nombre del Proyecto

Descripción breve del proyecto.

## Tabla de Contenidos

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)

## Requisitos

Asegúrate de tener instalado lo siguiente en tu entorno de desarrollo:

- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/) (normalmente se instala con Node.js)

## Instalación

1. Clona o descarga el repositorio de GitHub.

```bash
git clone https://github.com/darwinlatorre/TutorIA---Backend
```
2. Navega al directorio del proyecto.
```bash
cd TutorIA---Backend
```
3. Instala las dependencias usando npm.
```bash
cd npm install
```
4. Crear el arvhivo .env

```bash
PORT = PORT
X_API_KEY = API KEY FROM CHATPDF
PDF = 'namepdf'
```

## Uso
Una vez que hayas instalado las dependencias, puedes usar los siguientes comandos:

1. Iniciar la aplicación en modo de desarrollo:
```bash
npm run dev
```
2. Iniciar la aplicación en modo de producción:
```bash
npm start
```
3. Para consumir el API desplegado, simplemente haz solicitudes a la siguiente URL:
[API](https://tutoria---backend-dev-eadt.1.us-1.fl0.io)

## ENDPOINTS
1. POST https://tutoria---backend-dev-eadt.1.us-1.fl0.io/api/v1/consultPFD/upload
   Permite subir un archivo PDF ubicado dentro de la carpeta "src\database\pdfs" con el nombre que este especificado dentro de .env, devuelve el id del pdf en caso de ser necesario. NO REQUIERE UN BODY

2. POST https://tutoria---backend-dev-eadt.1.us-1.fl0.io/api/v1/consultPFD/

   Este endpoint sirve para enviar una consulta al bot respecto a la infomacion ingresada, como por ejemplo

   
```bash
  {"filename": "article",
   "message": "test",
   "widget": "api-chatgpt"} //windget desde donde fue enviado en caso de ser utilizado con Radisys
  ```
   Retorna la respuesta del botchat


