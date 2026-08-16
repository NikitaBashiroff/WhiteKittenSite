document.addEventListener('DOMContentLoaded', () => {

  const toggleBtn = document.getElementById('theme-toggle');
  const logoImg = document.getElementById('logo'); 

  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

  function updateUI(theme) {
    if (toggleBtn) {
      toggleBtn.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
    }

    if (logoImg) {
      let currentSrc = logoImg.getAttribute('src'); 
      
      if (theme === 'dark') {
        if (currentSrc.includes('dark-logo')) {
          logoImg.setAttribute('src', currentSrc.replace('dark-logo', 'light-logo'));
        }
      } else {
        if (currentSrc.includes('light-logo')) {
          logoImg.setAttribute('src', currentSrc.replace('light-logo', 'dark-logo'));
        }
      }
    }
  }

  document.documentElement.setAttribute('data-theme', currentTheme);
  updateUI(currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateUI(newTheme);
    });
  }

});
