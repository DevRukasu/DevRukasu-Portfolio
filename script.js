function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("expanded");
}

// Função para marcar link ativo
function setActiveLink() {
  const links = document.querySelectorAll('.sidebar ul li a:not([target="_blank"])');
  const currentHash = window.location.hash || '#sobre';
  
  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentHash) {
      link.classList.add('active');
    }
  });
}

// Marcar link ativo quando a página carregar
document.addEventListener('DOMContentLoaded', setActiveLink);

// Marcar link ativo quando o hash mudar
window.addEventListener('hashchange', setActiveLink);

// Adicionar event listener para os links
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.sidebar ul li a:not([target="_blank"])');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      // Remove active de todos os links
      links.forEach(l => l.classList.remove('active'));
      // Adiciona active no link clicado
      this.classList.add('active');
    });
  });
});