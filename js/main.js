document.addEventListener('DOMContentLoaded', () => {
  // Inicializar iconos de Lucide de forma segura
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Menú Móvil Toggle y comportamiento fluido
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });

    // Cerrar menú móvil al hacer clic en cualquier enlace interno
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Formulario de cotización rápida
  const quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = quoteForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value.trim() !== '') {
        alert(`¡Solicitud recibida con éxito! Nos pondremos en contacto a través de: ${emailInput.value.trim()}`);
        quoteForm.reset();
      }
    });
  }
});