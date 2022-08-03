/**
 * Async - Await:
 * Las palabras clave async y await permiten que el comportamiento asincrónico
 *  basado en promesas se escriba en un estilo más claro, lo que evita la 
 * necesidad de configurar explícitamente cadenas de promesas.
 */

 const getGif = async() => {

    try {

        // LLave que ya no funciona
        const apiKey = '5vwhiJPMVfuUzyeV1PyEHw4Hx6HiSQ9u';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );

    } catch (error) {
        // manejo del error
        console.error(error)
    }    
}

getGif();