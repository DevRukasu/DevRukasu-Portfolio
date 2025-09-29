// Portfolio JavaScript

// Dados dos projetos
const projects = {
  'weapons': {
    title: 'Weapons',
    description: 'Realistic and Stylized Weapons. ',
    images: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop'
    ]
  },
  'props': {
    title: 'Props',
    description: 'Game-ready props and assets',
    images: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop'
    ]
  },
  'environment': {
    title: 'Environment',
    description: '3D environments and scenery',
    images: [
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop'
    ]
  },
  'concepts': {
    title: 'Concepts',
    description: 'Concept Art for Weapons, Characters, and Environments',
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop'
    ]
  },
  'characters': {
    title: 'Characters',
    description: 'Game-Ready 3D Characters (without rig)',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop'
    ]
  },
  'materials-textures': {
    title: 'Materials & Textures',
    description: 'Custom PBR materials and texture sets crafted for realism and stylization.',
    images: [
      'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1542038784456-1ea8e2b8b2bb?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=800&fit=crop'
    ]
  }
};

// Função para abrir projeto
function openProject(projectId) {
  const project = projects[projectId];
  if (!project) return;

  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const projectImages = document.getElementById('projectImages');

  // Atualizar conteúdo do modal
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;

  // Limpar imagens anteriores
  projectImages.innerHTML = '';

  // Adicionar novas imagens
  project.images.forEach((imageUrl, index) => {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = `${project.title} - Imagem ${index + 1}`;
    img.loading = 'lazy';
    projectImages.appendChild(img);
  });

  // Mostrar modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Scroll para o topo do modal
  modal.scrollTop = 0;
}

// Função para fechar projeto
function closeProject() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Fechar modal clicando fora do conteúdo
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('projectModal');
  
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeProject();
    }
  });

  // Fechar modal com tecla ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeProject();
    }
  });
});

// Animação suave ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.project-card');
  
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    
    setTimeout(() => {
      card.style.transition = 'all 0.6s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 150);
  });
});

// Lazy loading para melhor performance
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.project-image');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.style.opacity = '1';
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
    imageObserver.observe(img);
  });
});