document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. SCROLL TO TOP & HEADER BG
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
  // 2. DARK / LIGHT THEME TOGGLE
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
