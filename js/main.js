// completar las variables para que el programa funcione

window.addEventListener('load', function() {

    //capturar HTML 
    let titulo = document.querySelector('#titulo');
    let span = document.querySelector('.bienvenida span');

    titulo.addEventListener('mouseover', function() {
        let nombre = prompt('Como te llamas?');
        let saludo = document.querySelector('#saludo');
        if (nombre === '' || nombre === null) {
            saludo.textContent = 'BIENVENID@!';
        } else {
            saludo.textContent = `BIENVENID@ ${nombre.toUpperCase()}!`
        }

        titulo.style.display = 'none';
        span.style.display = 'inline';
    })

    span.addEventListener('click', function() {
        let bienvenidaSection = document.querySelector('.bienvenida');
        let personajesSection = document.querySelector('.personajes');

        bienvenidaSection.style.display = 'none';
        personajesSection.style.display = 'flex';
    })

    
    
 
    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */
    

    /* Asignarle evento a la variable boton */
    let boton = 'a';
 
 
 }) 