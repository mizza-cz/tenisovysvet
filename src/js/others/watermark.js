$(document).ready(function () {
  $('.galleryArticle__img').watermark({
    text: 'Tenisovysvet.cz',
    textWidth: 250,
    opacity: 1,
    margin: 0,
    textSize: 24,
  });
});

document.addEventListener(
  'contextmenu',
  function (e) {
    e.preventDefault();
  },
  false,
);

document.addEventListener(
  'dragstart',
  function (e) {
    e.preventDefault();
  },
  false,
);

document.addEventListener(
  'keydown',
  function (e) {
    if (e.ctrlKey && (e.key === 's' || e.key === 'c')) {
      e.preventDefault();
    }
  },
  false,
);
