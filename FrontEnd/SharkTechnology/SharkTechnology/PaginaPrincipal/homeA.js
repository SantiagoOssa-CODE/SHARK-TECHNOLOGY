/* ========== Scroll Reveal para secciones ========== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
});
document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

/* ========== Header comprimido al hacer scroll ========== */
window.addEventListener('scroll', () => {
  const header = document.querySelector('.main-header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

/* ========== Animación de entrada para elementos con .fade-in-up ========== */
document.querySelectorAll('.fade-in-up').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(40px)';
});

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
      fadeObserver.unobserve(entry.target);
    }
  });
});
document.querySelectorAll('.fade-in-up').forEach(el => {
  fadeObserver.observe(el);
});

/* ========== Hover dinámico en íconos (opcional para expansión futura) ========== */
// Ejemplo: animar íconos con clase .icon-hover
document.querySelectorAll('.icon-hover').forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.style.transform = 'scale(1.1)';
  });
  icon.addEventListener('mouseleave', () => {
    icon.style.transform = 'scale(1)';
    });
});