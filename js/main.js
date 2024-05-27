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

    let bart = this.document.querySelector('#bart');
    bart.addEventListener('click', function() {
        alert('Seleccionaste a Bart!')
        bart.classList.toggle('personaje-seleccionado');
    })

    let homero = this.document.querySelector('#homero');
    homero.addEventListener('click', function() {
        alert('Seleccionaste a Homero!')
        homero.classList.toggle('personaje-seleccionado')
    })

    let milhouse = this.document.querySelector('#milhouse');
    milhouse.addEventListener('click', function() {
        alert('Seleccionaste a Milhouse!')
        milhouse.classList.toggle('personaje-seleccionado')
    })

    let nelson = this.document.querySelector('#nelson');
    nelson.addEventListener('click', function() {
        alert('Seleccionaste a Nelson!')
        nelson.classList.toggle('personaje-seleccionado')
    })

    let lisa = this.document.querySelector('#lisa');
    lisa.addEventListener('dblclick', function() {
        alert('Seleccionaste a Lisa!')
        lisa.classList.toggle('personaje-seleccionado')
    })

    let duffman = this.document.querySelector('#duffman');
    duffman.addEventListener('dblclick', function() {
        alert('Seleccionaste a Duffman!')
        duffman.classList.toggle('personaje-seleccionado')
    })

    let bobPatinio = this.document.querySelector('#bobPatinio');
    bobPatinio.addEventListener('dblclick', function() {
        alert('Seleccionaste a Bob Patinio!')
        bobPatinio.classList.toggle('personaje-seleccionado')
    })

    let marge = this.document.querySelector('#marge');
    marge.addEventListener('mouseenter', function() {
        alert('Entraste en el area de Marge!')
        marge.classList.toggle('personaje-seleccionado')
    })

    let burns = this.document.querySelector('#burns');
    burns.addEventListener('mouseenter', function() {
        alert('Entraste en el area de Burns!')
        burns.classList.toggle('personaje-seleccionado')
    })

    let flanders = this.document.querySelector('#flanders');
    flanders.addEventListener('mouseenter', function() {
        alert('Entraste en el area de Flanders!')
        flanders.classList.toggle('personaje-seleccionado')
    })

    let gorgory = this.document.querySelector('#gorgory');
    gorgory.addEventListener('mouseenter', function() {
        alert('Entraste en el area de Gorgory!')
        gorgory.classList.toggle('personaje-seleccionado')
    })

    let maggie = this.document.querySelector('#maggie');
    maggie.addEventListener('mouseleave', function() {
        alert('Saliste del area de Maggie!')
        maggie.classList.toggle('personaje-seleccionado')
    })


    /* Asignarle evento a la variable boton */
    let boton = document.querySelector('.boton');

    boton.addEventListener('click', function() {
        let seleccionados = document.querySelectorAll('personaje-seleccionado');
        console.log('Personajes seleccionados:');
        seleccionados.forEach(function(personaje) {
            console.log(personaje.querySelector('p').textContent);
    
        })
    })
 
 
 }) 