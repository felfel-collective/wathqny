document.querySelector('.theme-switcher')?.addEventListener('click', () => {
  const root = document.documentElement

  root?.classList.toggle('dark', !root?.classList.contains('dark'))
  localStorage.setItem('theme', 'dark')
})

const navbarToggle = document.querySelector('.wtq-toggle')
const navbar = document.querySelector('.wtq-links')

navbarToggle?.addEventListener('click', () => {
  const isActive = navbar?.classList.contains('wtq-active-links')
  navbar?.classList.toggle('wtq-active-links', !isActive)
  document.body.style.overflow = isActive ? '' : 'hidden'
})
