document.getElementsByTagName('form')[0].addEventListener('submit', fetchPokemon)

let ul = document.querySelector('ul');
let pokemonList = document.querySelector('#pokemonList');


function fetchPokemon(e) {

    e.preventDefault();
   
    let input = document.querySelector('#search');
    let singleMan = input.value.toLowerCase();
    let baseURL = `https://pokeapi.co/api/v2/pokemon/${singleMan}/`
    fetch(baseURL)
    .then(res => res.json())
    .then(json =>{
        console.log(json);
        displayPokemon(json)
    })
    .catch(err=>console.log(err));

   
}


function displayPokemon (pokemon) {
    $("#picture").attr("src", pokemon.sprites.front_default);
    pokemon.forEach (p => {
        let pokemonAbilities = document.createElement('li')
        pokemonAbilities.innerText = p.abiliies.ability.name;
        pokemonList.appendChild(pokemonAbilities);

    })
}   



    
    
    






















 