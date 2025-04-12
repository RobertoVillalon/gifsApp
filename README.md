# 🌀 Gifs App - Angular 19

Una aplicación web desarrollada con **Angular 19** que permite buscar y visualizar GIFs animados a través de la API pública de **Giphy**.

## ✨ Características

- 🔍 Búsqueda de GIFs por palabra clave.
- 🖼️ Visualización de resultados en una galería responsive.
- 🔁 Historial de búsquedas recientes.
- 📱 Diseño responsive y moderno.
- 🚀 100% construido con Angular 19 y TypeScript.

## 🔧 Tecnologías utilizadas

- Angular 19
- TypeScript
- RxJS
- HTML5 & CSS
- [Giphy API](https://developers.giphy.com/)

## 📦 Instalación

1. Clona el repositorio:
    git clone https://github.com/RobertoVillalon/gifsApp.git
    cd gifsApp

2. Instala las dependencias:
    npm install

3. Genera un archivo .env en la carpeta de environments que contenga tu ApiKey de Giphy

        export const environment = {
            production: false,
            giphyApiKey: 'TU_API_KEY_AQUI'
        };

4. Levanta el Servidor

    ng serve