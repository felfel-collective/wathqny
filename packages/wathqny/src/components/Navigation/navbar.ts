document.querySelector('.theme-switcher')?.addEventListener('click', () => {
  const root = document.documentElement;
  const isDark = root.classList.contains('dark');
  
  root.classList.toggle('dark', !isDark);
  root.classList.toggle('light', isDark);
  localStorage.theme = isDark ? 'light' : 'dark';
});

const navbarToggle = document.querySelector('.wtq-toggle')
const navbar = document.querySelector('.wtq-links')

navbarToggle?.addEventListener('click', () => {
  const isActive = navbar?.classList.contains('wtq-active-links')
  navbar?.classList.toggle('wtq-active-links', !isActive)
  document.body.style.overflow = isActive ? '' : 'hidden'
})
