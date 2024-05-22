document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('.section');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      scrollToSection(targetSection);
    });
  });

  function scrollToSection(section) {
    window.scrollTo({
      top: section.offsetTop - 50, // Adjust for fixed nav height
      behavior: 'smooth'
    });
  }

  window.addEventListener('scroll', function() {
    const currentScroll = window.scrollY;
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
        const currentId = section.getAttribute('id');
        highlightNavLink(currentId);
      }
    });
  });

  function highlightNavLink(currentId) {
    navLinks.forEach(link => {
      const href = link.getAttribute('href').substring(1);
      if (href === currentId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
});
