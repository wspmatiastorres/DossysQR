# DossysQR

DossysQR es una aplicación pensada para terminales móbiles para la lectura de códigos QR. Los códigos QR leidos permiten distintas acciones en el contexto de un sistema de control DOSSYS.

## Requisitos previos

- Node.js (versión 12 o superior) instalado en tu sistema.

## Configuración inicial

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/tu-usuario/DossysQR.git
```
Navega a la carpeta raíz del repositorio:

```bash
cd DossysQR
```
Instala las dependencias tanto para el cliente como para el servidor:

```bash
cd client
npm install
```

```bash
cd ../server
npm install
```
Uso del entorno de desarrollo
Abre una terminal y navega hasta la carpeta raíz del repositorio.

Para ejecutar el entorno de desarrollo del cliente, usa el siguiente comando:

```bash
cd client
npm run dev
```
Esto iniciará el servidor de desarrollo del cliente y podrás acceder a la aplicación en tu navegador en http://localhost:3000.

Para ejecutar el entorno de desarrollo del servidor, abre otra terminal en la carpeta raíz del repositorio y ejecuta el siguiente comando:

```bash
cd server
npm run dev
```
Esto iniciará el servidor de desarrollo del servidor y estará disponible en http://localhost:4000.

Generar el distribuible
Si deseas generar el distribuible de la aplicación, puedes seguir estos pasos:

Asegúrate de estar en la carpeta raíz del repositorio.

Para generar el distribuible del cliente, ejecuta el siguiente comando:

```bash
cd client
npm run build
```
Los archivos generados se encontrarán en la carpeta dist dentro de la carpeta del cliente.

Para generar el distribuible del servidor, abre otra terminal en la carpeta raíz del repositorio y ejecuta el siguiente comando:

```bash
cd server
npm run build
```
Los archivos generados se encontrarán en la carpeta dist dentro de la carpeta del servidor.

Recuerda que los distribuibles generados son los que deberías usar en un entorno de producción.

## Documentación específica

### [CLIENTE](./client/README.md)

### [SERVIDOR](./server/README.md)