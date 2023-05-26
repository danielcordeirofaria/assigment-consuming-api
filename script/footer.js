// footer.js

// Função para carregar o footer
function loadFooter() {
    var footer = document.getElementById("footer");
    var currentYear = new Date().getFullYear();
    var contentFooter = "© " + currentYear + " Daniel Faria";
    footer.innerHTML = contentFooter;
  }
  
  // Chama a função para carregar o footer ao carregar a página
  window.addEventListener("DOMContentLoaded", loadFooter);
  