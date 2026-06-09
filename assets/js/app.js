document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. MOBILE BURGER MENU LOGIC
  // ==========================================
  const burgerMenu = document.getElementById('burger-menu');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const burgerOpenIcon = document.querySelector('.burger-open');
  const burgerCloseIcon = document.querySelector('.burger-close');

  function toggleMenu() {
    navMenu.classList.toggle('show');
    const isShow = navMenu.classList.contains('show');
    
    if (isShow) {
      burgerOpenIcon.style.display = 'none';
      burgerCloseIcon.style.display = 'block';
    } else {
      burgerOpenIcon.style.display = 'block';
      burgerCloseIcon.style.display = 'none';
    }
  }

  burgerMenu.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('show')) {
        toggleMenu();
      }
    });
  });

  // ==========================================
  // 2. SCROLL TO TOP & HEADER BG
  // ==========================================
  const scrollUp = document.getElementById('scroll-up');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollUp.classList.add('visible');
    } else {
      scrollUp.classList.remove('visible');
    }
  });

  scrollUp.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // ==========================================
  // 3. DARK / LIGHT THEME TOGGLE
  // ==========================================
  const themeToggleBtn = document.getElementById('theme-toggle');
  
  // Check localStorage for saved theme preference, fallback to dark
  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    let targetTheme = 'dark';
    
    if (activeTheme === 'dark') {
      targetTheme = 'light';
    }
    
    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
  });
});
