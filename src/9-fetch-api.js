/**
 * Fetch API:
 * Viene en los navegadores web y nos permitirá a nosotros hacer peticiones 
 * HTTP a endPoints directamente sin importar ninguna librería.
 * Enlace de la API: https://developers.giphy.com/
 */

// LLave que ya no funciona
const apiKey = "5vwhiJPMVfuUzyeV1PyEHw4Hx6HiSQ9u";

const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
 
 //Promesas en cadena
httpCall
    .then( res => res.json() )
    .then( ({data}) => {
        const {url} = data.images.original;
        const img = document.createElement("img");
        img.src = url;

        document.body.append(img);
    }) 
    .catch( console.warn );