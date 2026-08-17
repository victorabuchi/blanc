(function () {
  var toggle = document.getElementById('menuToggle');
  var close = document.getElementById('navClose');
  var overlay = document.getElementById('navOverlay');

  if (!toggle || !overlay) return;

  function openNav() {
    document.body.classList.add('nav-open');
  }

  function closeNav() {
    document.body.classList.remove('nav-open');
  }

  toggle.addEventListener('click', openNav);
  if (close) close.addEventListener('click', closeNav);

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeNav();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });
})();
