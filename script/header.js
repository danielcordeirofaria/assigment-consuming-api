
  // Função para criar o header usando um template
function createHeader() {
    // Obtém o elemento do header
    const header = document.querySelector("header");
    
    // Template HTML do header
    const headerTemplate = `<nav class="nav_links"> <ul class="ul_links"> <li><a href="index.html" class="home-link">Main page</a></li> <li><a href="random-pokemon.html" class="random-link">Random Pokemon</a></li> <li><a href="choosing-a-pokemon.html" class="choosen-a-pokemon">Choosing a Pokemon</a></li> </ul> </nav>` ;
    
    // Insere o template HTML no elemento do header
    header.innerHTML = headerTemplate;
    }
    
    // Chama a função para criar o header ao carregar a página
    window.addEventListener("DOMContentLoaded", createHeader);