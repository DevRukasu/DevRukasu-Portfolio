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




// ===============================
// PARTÍCULAS ANIMADAS NO BACKGROUND
// ===============================

function createParticles() {
  const particlesContainer = document.getElementById('particles-bg');
  if (!particlesContainer) return;

  const numberOfParticles = 60;

  for (let i = 0; i < numberOfParticles; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Posição aleatória
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    // Delay aleatório na animação
    particle.style.animationDelay = Math.random() * 8 + 's';
    
    // Duração aleatória
    particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
    
    // Tamanho aleatório
    const size = Math.random() * 2 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    particlesContainer.appendChild(particle);
  }
}

// Inicializar partículas quando a página carregar
document.addEventListener('DOMContentLoaded', createParticles);