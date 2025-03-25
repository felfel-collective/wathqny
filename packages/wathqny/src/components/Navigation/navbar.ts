document.querySelector('.theme-switcher')?.addEventListener('click', () => {
  const root = document.documentElement
  if (root?.classList.contains('dark')) {
    root?.classList.replace('dark', 'light')
    localStorage.setItem('theme', 'light')
  } else {
    root?.classList.replace('light', 'dark')
    localStorage.setItem('theme', 'dark')
  }
})

const navbarToggle = document.querySelector('.wtq-toggle')
const navbar = document.querySelector('.wtq-links')

navbarToggle?.addEventListener('click', () => {
  if (navbar?.classList.contains('wtq-active-links')) {
    navbar?.classList.remove('wtq-active-links')
    document.body.style.overflow = ''
  } else {
    navbar?.classList.add('wtq-active-links')
    document.body.style.overflow = 'hidden'
  }
})