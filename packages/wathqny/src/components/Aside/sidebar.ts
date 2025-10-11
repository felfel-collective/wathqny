const sidebar = document.querySelector('.wtq-sidebar') as HTMLElement

const sidebarOverlay = document.querySelector(
  '.wtq-sidebar-overlay',
) as HTMLElement

const sidebarCollapseBtn = sidebar.querySelector(
  '.wtq-collapse-button',
) as HTMLElement

const toggle = document.querySelector('.wtq-nav-menu') as HTMLElement

function sidebarShrinkAndLock() {
  const showSidebar = sidebar?.classList.contains('wtq-show')
  sidebarOverlay.classList.toggle('wtq-show', showSidebar)
  sidebar?.classList.toggle('wtq-show', showSidebar)
  document.body.style.overflow = showSidebar ? 'hidden' : ''
}

toggle?.addEventListener('click', sidebarShrinkAndLock)

sidebarOverlay?.addEventListener('click', sidebarShrinkAndLock)

sidebarCollapseBtn?.addEventListener('click', () => {
  sidebar.classList.toggle('wtq-aside-collapse')
})
