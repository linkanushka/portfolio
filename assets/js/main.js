// Navbar scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Reveal + skill bar animation
  const reveals = document.querySelectorAll('.reveal');
  const fills = document.querySelectorAll('.skill-fill');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        // Animate child skill fills
        e.target.querySelectorAll('.skill-fill').forEach(f => {
          setTimeout(() => f.classList.add('animated'), 200);
        });
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));

  // Also observe skill fills directly
  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('animated'), 300);
      }
    });
  }, { threshold: 0.5 });
  fills.forEach(f => skillObserver.observe(f));