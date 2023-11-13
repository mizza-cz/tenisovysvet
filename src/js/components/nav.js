/*!
 * nav.js
 */
(function () {
  // Toggle nav
  const nav = document.getElementById("js-nav");
  const navButton = document.getElementById("js-nav-toggle");

  const isActive = "is-active";
  const isMenuOpen = "is-menuOpen";

  const inactiveNav = () => {
    // Fix Headroom bug on page with custom scrollbar
    // header && header.classList.remove("is-pinned");

    nav.classList.remove(isActive);
    navButton.classList.remove(isActive);
    navButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove(isMenuOpen);
  };

  document.addEventListener('nav-close', () => {
    inactiveNav()
  })

  if (nav && navButton) {
    window.addEventListener('resize', () => {
      document.body.style.setProperty('--branding-top-height', document.querySelector('.Branding--top').clientHeight - 1 + 'px');
    })

    navButton.addEventListener("click", () => {
      // Fix Headroom bug on page with custom scrollbar
      // header && header.classList.toggle("is-pinned");

      // Get top position relative to the viewport for calculate nav height
      // const navOffsetTop = nav.getBoundingClientRect().top;
      // nav.style.top = `${navOffsetTop}px`;
      // nav.style.height = `calc(100% - ${navOffsetTop}px)`;

      document.body.style.setProperty('--branding-top-height', document.querySelector('.Branding--top').clientHeight - 1 + 'px');

      nav.classList.toggle(isActive);
      navButton.classList.toggle(isActive);
      navButton.setAttribute("aria-expanded", nav.classList.contains(isActive).toString());
      document.body.classList.toggle(isMenuOpen, nav.classList.contains(isActive));

      // if (!nav.classList.contains(isActive)) {
      //   nav.style.top = "100%";
      //   nav.style.height = "auto";
      // }
    });

    document.addEventListener("click", (ev) => {
      if (nav.classList.contains(isActive) && !nav.contains(ev.target) && !navButton.contains(ev.target)) {
        inactiveNav();
      }
    });

    document.addEventListener("keydown", (ev) => {
      if (ev.key === "Escape") {
        inactiveNav();
      }
    });
  }
})();
