document.addEventListener('DOMContentLoaded', function () {
  var menuToggle = document.querySelector('.site-header__menu-toggle');
  var drawer = document.getElementById('mobile-nav-drawer');
  var overlay = document.getElementById('mobile-nav-overlay');
  var closeBtn = document.querySelector('.mobile-nav-drawer__close');

  function openDrawer() {
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    overlay.hidden = false;
    requestAnimationFrame(function () {
      overlay.classList.add('is-visible');
    });
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('is-visible');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    setTimeout(function () {
      overlay.hidden = true;
    }, 250);
  }

  if (menuToggle && drawer && overlay) {
    menuToggle.addEventListener('click', openDrawer);
    closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);
    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeDrawer);
    });
  }

  var searchToggles = document.querySelectorAll('.site-header__search-toggle');
  var searchOverlay = document.getElementById('search-overlay');
  var searchBackdrop = document.getElementById('search-overlay-backdrop');
  var searchClose = document.querySelector('.search-overlay__close');
  var searchInput = document.querySelector('.search-overlay__input');

  function openSearch() {
    searchOverlay.classList.add('is-open');
    searchOverlay.setAttribute('aria-hidden', 'false');
    searchBackdrop.hidden = false;
    requestAnimationFrame(function () {
      searchBackdrop.classList.add('is-visible');
    });
    searchToggles.forEach(function (btn) {
      btn.setAttribute('aria-expanded', 'true');
    });
    document.body.style.overflow = 'hidden';
    if (searchInput) {
      searchInput.focus();
    }
  }

  function closeSearch() {
    searchOverlay.classList.remove('is-open');
    searchOverlay.setAttribute('aria-hidden', 'true');
    searchBackdrop.classList.remove('is-visible');
    searchToggles.forEach(function (btn) {
      btn.setAttribute('aria-expanded', 'false');
    });
    document.body.style.overflow = '';
    setTimeout(function () {
      searchBackdrop.hidden = true;
    }, 250);
  }

  if (searchToggles.length && searchOverlay && searchBackdrop) {
    searchToggles.forEach(function (btn) {
      btn.addEventListener('click', openSearch);
    });
    searchClose.addEventListener('click', closeSearch);
    searchBackdrop.addEventListener('click', closeSearch);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && searchOverlay.classList.contains('is-open')) {
        closeSearch();
      }
    });
  }

  document.querySelectorAll('.product__sizes').forEach(function (group) {
    group.querySelectorAll('.size-btn:not(.is-sold-out)').forEach(function (btn) {
      btn.addEventListener('click', function () {
        group.querySelectorAll('.size-btn').forEach(function (b) {
          b.classList.remove('is-active');
        });
        btn.classList.add('is-active');
      });
    });
  });
});
