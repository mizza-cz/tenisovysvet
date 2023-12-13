/*!
 * main.js
 */
document.addEventListener('DOMContentLoaded', () => {
  // Init MiniLazyload
  new MiniLazyload()

  // Init Easydropdown (nice selects)
  // easydropdown.all()

  // Init Flatpickr (date picker)
  const datePickers = document.querySelectorAll('.js-datePicker')
  if (datePickers.length) {
    flatpickr('.js-datePicker', {
      locale: 'cs',
      monthSelectorType: 'static',
      dateFormat: 'd. m. Y',
      prevArrow:
        '<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.52929 0.469706C5.66974 0.610332 5.74863 0.800956 5.74863 0.999706C5.74863 1.19846 5.66974 1.38908 5.52929 1.52971L2.06029 4.99971L5.53029 8.46971C5.65716 8.59682 5.7342 8.76524 5.74742 8.94434C5.76063 9.12345 5.70913 9.30135 5.60229 9.44571L5.52929 9.52971C5.38867 9.67016 5.19804 9.74905 4.99929 9.74905C4.80054 9.74905 4.60992 9.67016 4.46929 9.52971L0.469293 5.52971C0.328843 5.38908 0.249953 5.19846 0.249953 4.99971C0.249953 4.80096 0.328843 4.61033 0.469293 4.46971L4.46929 0.469706C4.60992 0.329256 4.80054 0.250366 4.99929 0.250366C5.19804 0.250366 5.38867 0.329256 5.52929 0.469706Z" fill="#121619"/></svg>',
      nextArrow:
        '<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.470097 9.52971C0.329646 9.38909 0.250757 9.19846 0.250757 8.99971C0.250757 8.80096 0.329646 8.61034 0.470097 8.46971L3.9391 4.99971L0.469097 1.52971C0.342229 1.4026 0.265185 1.23418 0.251972 1.05508C0.23876 0.87597 0.290255 0.698069 0.397097 0.553714L0.470097 0.469714C0.610722 0.329264 0.801346 0.250374 1.0001 0.250374C1.19885 0.250374 1.38947 0.329264 1.5301 0.469714L5.5301 4.46971C5.67055 4.61034 5.74944 4.80096 5.74944 4.99971C5.74944 5.19846 5.67055 5.38909 5.5301 5.52971L1.5301 9.52971C1.38947 9.67016 1.19885 9.74905 1.0001 9.74905C0.801346 9.74905 0.610722 9.67016 0.470097 9.52971Z" fill="#121619"/></svg>',
    })
  }

  // Table overflow wrappers
  const tables = document.querySelectorAll('table')
  if (tables.length) {
    for (let index = 0; index < tables.length; index++) {
      const table = tables[index]

      if (table.classList.contains('js-table-notResponsive')) {
        break
      }

      const wrapper = document.createElement('div')
      wrapper.style.overflowX = 'auto'
      table.after(wrapper)
      wrapper.appendChild(table)
    }
  }

  // Article - Add containers for social media, iframes
  function handleSocialMedia() {
    // const isActive = "is-active";

    const cookieConsentFrame = isLocalhost
      ? '<iframe class="js-cookieConsent-frame" src="./cookie-consent-frame.html"></iframe>'
      : '<iframe class="js-cookieConsent-frame" src="/front/dist/cookie-consent-frame.html"></iframe>'
    const iframes = document.querySelectorAll('iframe')
    const twitters = document.querySelectorAll('.twitter-tweet')
    const instagrams = document.querySelectorAll('.instagram-media')
    const tikToks = document.querySelectorAll('.tiktok-embed')

    // YouTube, Facebook iframes
    if (iframes.length) {
      for (let i = 0; i < iframes.length; i++) {
        const iframe = iframes[i]
        const src = iframe.getAttribute('data-src')

        // YouTube
        if (src && src.includes('youtube')) {
          const container = document.createElement('div')
          container.classList.add('YouTubeContainer', 'js-embedSocialMedia')
          iframe.after(container)
          container.appendChild(iframe)
        }

        // Facebook
        if (src && src.includes('facebook')) {
          const container = document.createElement('div')
          container.classList.add('EmbedContainer', 'js-embedSocialMedia')
          iframe.after(container)
          container.appendChild(iframe)
        }
      }
    }

    // Twitters
    if (twitters.length) {
      for (let i = 0; i < twitters.length; i++) {
        const twitter = twitters[i]

        const container = document.createElement('div')
        container.classList.add('EmbedContainer', 'js-embedSocialMedia')
        twitter.after(container)
        container.appendChild(twitter)
        container.insertAdjacentHTML('afterbegin', cookieConsentFrame)
      }
    }

    // Instagrams
    if (instagrams.length) {
      for (let i = 0; i < instagrams.length; i++) {
        const instagram = instagrams[i]

        const container = document.createElement('div')
        container.classList.add('EmbedContainer', 'js-embedSocialMedia')
        instagram.after(container)
        container.appendChild(instagram)
        container.insertAdjacentHTML('afterbegin', cookieConsentFrame)
      }
    }

    // TikToks
    if (tikToks.length) {
      for (let i = 0; i < tikToks.length; i++) {
        const tikTok = tikToks[i]

        const container = document.createElement('div')
        container.classList.add('EmbedContainer', 'js-embedSocialMedia')
        tikTok.after(container)
        container.appendChild(tikTok)
        container.insertAdjacentHTML('afterbegin', cookieConsentFrame)
      }
    }
  }
  handleSocialMedia()

  function checkSocialMedia() {
    const socialMedia = document.querySelectorAll('.js-embedSocialMedia')

    socialMedia.forEach((item) => {
      if (item.childNodes.length > 1) {
        item.childNodes.forEach((i) => {
          // Twitter - remove cookie consent frame
          if (i.classList.contains('twitter-tweet-rendered')) {
            item.querySelector('.js-cookieConsent-frame') &&
              item.querySelector('.js-cookieConsent-frame').remove()
          }

          // Instagram - remove cookie consent frame
          if (i.classList.contains('instagram-media-rendered')) {
            item.querySelector('.js-cookieConsent-frame') &&
              item.querySelector('.js-cookieConsent-frame').remove()
          }

          // TikTok - remove cookie consent frame
          if (i.querySelector('iframe')) {
            item.querySelector('.js-cookieConsent-frame') &&
              item.querySelector('.js-cookieConsent-frame').remove()
          }
        })
      }
    })
  }

  // Mutation Observer
  const mutationCallback = () => {
    checkSocialMedia()
  }

  if (document.querySelector('.Article-body')) {
    const mutationObserver = new MutationObserver(mutationCallback)

    const targetNode = document.querySelector('.Article-body')
    mutationObserver.observe(targetNode, { subtree: true, childList: true })
  }

  if (document.cookie.indexOf('cc_cookie_cancel=1') !== -1) {
    document.querySelectorAll('.js-embedSocialMedia').forEach(function (el) {
      el.style.display = 'none'
    })
  }

  // Handle sidebar Hot news, Czechs at Tournaments on Homepage
  const sideHotNews = document.getElementById('sidebar-news')
  const sideHotNewsContainerDesktop = document.getElementById(
    'js-hot-news-desktop',
  )
  const sideHotNewsContainerMobile =
    document.getElementById('js-hot-news-mobile')

  const sideTournaments = document.getElementById('sidebar-tournaments-czechs')
  const sideTournamentsContainerDesktop = document.getElementById(
    'js-tournaments-czechs-desktop',
  )
  const sideTournamentsContainerMobile = document.getElementById(
    'js-tournaments-czechs-mobile',
  )

  const mqMediumMin = '(min-width: 801px)'
  const mqMediumMinMethod = window.matchMedia(mqMediumMin)

  const handleViewportChange = (ev) => {
    if (ev.media === mqMediumMin) {
      if (ev.matches) {
        if (sideHotNewsContainerDesktop && sideHotNews)
          sideHotNewsContainerDesktop.appendChild(sideHotNews)
        if (sideTournamentsContainerDesktop && sideTournaments)
          sideTournamentsContainerDesktop.appendChild(sideTournaments)
      } else {
        if (sideHotNewsContainerMobile && sideHotNews)
          sideHotNewsContainerMobile.appendChild(sideHotNews)
        if (sideTournamentsContainerMobile && sideTournaments)
          sideTournamentsContainerMobile.appendChild(sideTournaments)
      }
    }
  }

  mqMediumMinMethod.addEventListener('change', handleViewportChange)
  handleViewportChange(mqMediumMinMethod)

  // Show Czechs only in Rankings
  const checkboxCzechsOnly = document.getElementById('js-rankings-czechs-only')
  const rankingsTableRows = document.querySelectorAll('.js-rankings-table tr')

  if (checkboxCzechsOnly) {
    checkboxCzechsOnly.addEventListener('change', () => {
      if (checkboxCzechsOnly.checked) {
        for (let i = 0; i < rankingsTableRows.length; i++) {
          const row = rankingsTableRows[i]

          if (row.hasAttribute('data-czech')) {
            continue
          }

          row.style.display = 'none'
        }
      } else {
        rankingsTableRows.forEach((row) => {
          row.style.display = 'table-row'
        })
      }
    })
  }
})

window.addEventListener('load', () => {
  // Remove Preload class (prevent unwanted CSS transitions on load)
  document.documentElement.classList.remove('Preload')

  // Remove Preload class (prevent unwanted CSS animations on load)
  const notAnimEls = document.querySelectorAll('.NotAnimOnLoad')
  if (notAnimEls.length) {
    notAnimEls.forEach((el) => {
      el.classList.remove('NotAnimOnLoad')
    })
  }
})

// Toggle Preload class on resize (prevent unwanted CSS transitions on resize)
let resizeTimer
window.addEventListener('resize', () => {
  document.documentElement.classList.add('Preload')
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(() => {
    document.documentElement.classList.remove('Preload')
  }, 400)
})

// function setCookie(name, vaule, expirationDays) {
//   let date = new Date()
//   date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000)
//   const expires = 'expires=' + date.toUTCString()
//   document.cookie = name + '=' + vaule + '; ' + expires + '; path=/'
// }
