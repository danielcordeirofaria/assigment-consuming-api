var button = document.querySelector(".ok_button");

button.addEventListener("click", function(event) {
    event.preventDefault();

    var input = document.querySelector("input").value
    findPokemonPorNumero(input)
});

async function findPokemonPorNumero(numberOrName) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numberOrName}`);
      const data = await response.json();

      let pokemon = {
        id: data.id,
        image: data.sprites.front_default,
        type: data.types[0].type.name, // Acessando o primeiro tipo do array de tipos
        height: data.height,
        weight: data.weight
      };

      let templatePokemon = `
        <section class="sectionsPokemons">
          <div class="div_image_pokemon">
            <img class="image_pokemon" src="${pokemon.image}">
          </div>
          <div class="div_title_pokemon">
            <h2 class="id_pokemon">Id Pokemon: ${pokemon.id}</h2>
            <h2>Name: ${data.name}</h2> <!-- Utilizando o nome do Pokémon diretamente de "data" -->
          </div>
          <div class="div_info_pokemon">
            <h2>Type: ${pokemon.type}</h2>
            <p>Height: ${pokemon.height/10}m</p>
            <p>Weight: ${pokemon.weight/100}kg</p>
          </div>
        </section>
      `;

      const pokemonsContainer = document.querySelector(".div_pokemon");
      pokemonsContainer.innerHTML = templatePokemon;
    } catch (error) {
      console.error("Erro ao buscar o Pokémon:", error);
      var errorElement = document.createElement("h1");
      errorElement.textContent = "Error! The name or input is invalid!";
      const pokemonsContainer = document.querySelector(".div_pokemon");
      pokemonsContainer.innerHTML = "";
      pokemonsContainer.appendChild(errorElement);
    }
}
