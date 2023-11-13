/*!
 * tabs.js
 */
(function () {
  const tabsEls = document.querySelectorAll(".js-tabs");
  const isActive = "is-active";

  const tabs = (tabsEl) => {
    const tabsButtons = tabsEl.querySelectorAll(".js-tabs-button");
    const tabsPanels = tabsEl.querySelectorAll(".js-tabs-panel");
    const isVisibleHash = tabsEl.dataset.visibleHash;

    if (isVisibleHash === "true") {
      checkHash();
      window.addEventListener("popstate", () => {
        checkHash();
      });
    }

    function clear() {
      tabsButtons.forEach((tabButton) => {
        tabButton.classList.remove(isActive);
        tabButton.setAttribute("aria-selected", false);
      });

      tabsPanels.forEach((tabPanel) => {
        tabPanel.classList.remove(isActive);
      });
    }

    function setActiveByHash(hash) {
      tabsButtons.forEach((tabButton) => {
        if (tabButton.dataset.tabHash && tabButton.dataset.tabHash === hash) {
          clear();
          tabButton.classList.add(isActive);
          tabButton.setAttribute("aria-selected", true);
          if (document.getElementById(tabButton.getAttribute("aria-controls"))) {
            document.getElementById(tabButton.getAttribute("aria-controls")).classList.add(isActive);
          }
        }
      });
    }

    function checkHash() {
      if (window.location.hash) {
        setActiveByHash(window.location.hash.replace("#", ""));
      } else {
        clear();
        tabsButtons[0].classList.add(isActive);
        tabsButtons[0].setAttribute("aria-selected", true);
        document.getElementById(tabsButtons[0].getAttribute("aria-controls")).classList.add(isActive);
      }
    }

    tabsButtons.forEach((tabButton) => {
      tabButton.addEventListener("click", () => {
        if (tabButton.dataset.tabHash) {
          window.location.hash = tabButton.dataset.tabHash;
        }

        if (tabButton.classList.contains(isActive)) {
          return;
        }

        clear();
        tabButton.classList.add(isActive);
        tabButton.setAttribute("aria-selected", true);
        const currentTabPanel = document.getElementById(tabButton.getAttribute("aria-controls"));
        currentTabPanel.classList.add(isActive);
      });
    });
  };

  if (tabsEls.length) {
    tabsEls.forEach((tabsEl) => {
      tabs(tabsEl);
    });
  }
})();
