/*!
 * accordion.js
 */
(function () {
  const accordionEls = document.querySelectorAll(".js-accordion");

  const accordion = (accordionEl) => {
    const buttons = accordionEl.querySelectorAll(".js-accordion-button");
    const activeContent = accordionEl.querySelector(".js-accordion-collapsible.is-active");
    const isActive = "is-active";
    const isStayOpen = accordionEl.dataset.stayOpen;

    const setActiveContent = (content) => {
      content.classList.add(isActive);
      content.style.height = content.scrollHeight + "px";
      content.style.visibility = "visible";
    };

    const setInactiveContent = (content) => {
      content.classList.remove(isActive);
      content.style.height = null;
      content.style.visibility = null;
    };

    if (activeContent) {
      activeContent.style.height = activeContent.scrollHeight + "px";
      activeContent.style.visibility = "visible";
    }

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        button.classList.toggle(isActive);

        const currentContent = accordionEl.querySelector(`#${button.getAttribute("aria-controls")}`);

        if (isStayOpen === "false") {
          const activeContent = accordionEl.querySelector(".js-accordion-collapsible.is-active");

          if (activeContent && activeContent.id !== currentContent.id) {
            activeContent.previousElementSibling.querySelector(".js-accordion-button").classList.remove(isActive);
            activeContent.previousElementSibling.querySelector(".js-accordion-button").setAttribute("aria-expanded", false);
            setInactiveContent(activeContent);
          }
        }

        if (currentContent.classList.contains(isActive)) {
          button.setAttribute("aria-expanded", false);
          setInactiveContent(currentContent);
        } else {
          button.setAttribute("aria-expanded", true);
          setActiveContent(currentContent);
        }
      });
    });
  };

  if (accordionEls.length) {
    accordionEls.forEach((accordionEl) => {
      accordion(accordionEl);
    });
  }

  const recalculateActiveContentHeight = () => {
    const activeContents = document.querySelectorAll(".js-accordion-collapsible.is-active");

    activeContents.forEach((activeContent) => {
      activeContent.style.height = "auto";
      activeContent.style.height = activeContent.scrollHeight + "px";
    });
  };

  window.addEventListener("resize", recalculateActiveContentHeight);
})();
