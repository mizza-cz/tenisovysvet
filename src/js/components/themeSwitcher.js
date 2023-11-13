/*!
 * themeSwitcher.js
 */
;(function () {
  const THEME_ATTRIBUTE = 'data-theme'

  const themeSwitchers = document.querySelectorAll('.js-themeSwitcher')

  if (localStorage.getItem('theme')) {
    document.documentElement.setAttribute(
      THEME_ATTRIBUTE,
      localStorage.getItem('theme'),
    )
  }

  themeSwitchers.forEach((themeSwitcher) => {
    themeSwitcher.addEventListener('click', (event) => {
      event.preventDefault()

      const currentTheme =
        document.documentElement.getAttribute(THEME_ATTRIBUTE) || 'light'
      const theme = currentTheme === 'light' ? 'dark' : 'light'
      document.documentElement.classList.add('Preload')
      document.documentElement.setAttribute(THEME_ATTRIBUTE, theme)
      setTimeout(() => {
        document.documentElement.classList.remove('Preload')
      }, 0)

      document.dispatchEvent(new CustomEvent('nav-close'))
      localStorage.setItem('theme', theme)
    })
  })
})()
