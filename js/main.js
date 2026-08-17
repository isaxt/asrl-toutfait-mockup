/* =======================================================
   Tout-Fait recreation — main.js
   Small progressive-enhancement script:
   - mobile nav toggle
   - back-to-top button
   - simple auto-rotating "Latest News" ticker
   ======================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---- Mobile nav toggle -------------------------------------- */
  var sidebar = document.getElementById('tertiary');
  var toggleBtn = document.querySelector('.nav-toggle');
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', function () {
      sidebar.classList.toggle('open');
    });
  }

  /* ---- Back-to-top button --------------------------------------- */
  var backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---- Latest News auto ticker ----------------------------------
     Cycles a highlighted state through the ticker items every
     few seconds, similar in spirit to the live site's ticker
     plugin (without the external dependency).
  ------------------------------------------------------------------ */
  var ticker = document.getElementById('vertical-ticker');
  if (ticker) {
    var items = ticker.querySelectorAll('li');
    var current = 0;
    if (items.length > 1) {
      setInterval(function () {
        items.forEach(function (li) { li.classList.remove('active'); });
        current = (current + 1) % items.length;
        items[current].classList.add('active');
      }, 4000);
    }
  }

});
