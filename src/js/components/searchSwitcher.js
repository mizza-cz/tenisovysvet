/*!
 * searchSwitcher.js
 */
(function () {
    const searchSwitchers = document.querySelectorAll(".js-searchSwitcher")

    searchSwitchers.forEach((searchSwitcher => {
        searchSwitcher.addEventListener("click", (event) => {
            event.preventDefault()

            event.currentTarget.parentElement.classList.toggle("has-search")
        })
    }))
})();
