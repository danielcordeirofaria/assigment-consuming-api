async function findPokemonPorNumero(numero) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`);
      const data = await response.json();
  
      let pokemon = {
        id: data.id,
        image: data.sprites.front_default,
        type: data.types[0].type.name, 
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
  
      const pokemonsContainer = document.querySelector(".pokemons");
      pokemonsContainer.innerHTML += templatePokemon;
    } catch (error) {
      console.error("Erro ao buscar o Pokémon:", error);
    }
  }
  
  //Sister, I know this way is slower than others, But, when I need to put in my program an array working, I choose this way.async function creatingFivePokemons() {
  async function creatingAmountPokemons(amount) {
    var arrayPokemonNumber  = []
    for (var i = 0; i < amount; i++) {
        var randomPokemonNumber = Math.floor(Math.random() * 1010) + 1;
        arrayPokemonNumber.push(randomPokemonNumber)
    }
    console.log(arrayPokemonNumber)
    for(i = 0; i < amount; i++ ){
        await findPokemonPorNumero(arrayPokemonNumber[i]);
    }
  }
  
  creatingAmountPokemons(1)
  
  