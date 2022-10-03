
// 1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

const pokeTitulo = document.querySelector('#gen-1');
console.log(pokeTitulo)
pokeTitulo.innerText = 'Generasión 1 Pokimon';

// 2. Cambia el color de fondo de la primera generación de Pokimon.

const pokeColor = document.querySelector(".infocard-list");
pokeColor.style.background = "pink";
console.log(pokeColor)

// 3. Imprime por consola la URL de la página.

val = document.URL;
console.log(document.URL)

// 4. Imprime por consola el dominio de la página.

val = document.domain;
console.log(document.domain)

// 5. Imprime todos los nodos de imagen.

const pokeImg = document.getElementsByTagName('img');
console.log(pokeImg)

// 6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

const pokeChange = document.querySelectorAll("img");
    // pokeChange.setAttribute("src", "https://media.giphy.com/media/2v170e71aanfi/giphy.gif")

for (let i = 0; i < pokeChange.length; i++) {

    console.log(pokeChange[i].setAttribute("src", "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"));
    
    }


// 7. Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying

const infoChange = document.getElementsByClassName(".itype flying")

for (let i = 0; i < infoChange.length; i++) {
    console.log(infoChange[i])
    console.log(document.getElementsByClassName('infocard-lg-data text-muted').parentNode);
            
    //No entiendo qué pasos hay que seguir :(
}
