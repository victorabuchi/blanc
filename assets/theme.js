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
    drawer.querySelectorAll('a, button:not(.help-overlay-toggle)').forEach(function (link) {
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

  var helpToggles = document.querySelectorAll('.help-overlay-toggle');
  var helpOverlay = document.getElementById('help-overlay');
  var helpBackdrop = document.getElementById('help-overlay-backdrop');
  var helpClose = document.querySelector('.help-overlay__close');

  function openHelp() {
    if (drawer && drawer.classList.contains('is-open')) {
      closeDrawer();
    }
    if (searchOverlay && searchOverlay.classList.contains('is-open')) {
      closeSearch();
    }
    helpOverlay.classList.add('is-open');
    helpOverlay.setAttribute('aria-hidden', 'false');
    helpBackdrop.hidden = false;
    requestAnimationFrame(function () {
      helpBackdrop.classList.add('is-visible');
    });
    helpToggles.forEach(function (btn) {
      btn.setAttribute('aria-expanded', 'true');
    });
    document.body.style.overflow = 'hidden';
  }

  function closeHelp() {
    helpOverlay.classList.remove('is-open');
    helpOverlay.setAttribute('aria-hidden', 'true');
    helpBackdrop.classList.remove('is-visible');
    helpToggles.forEach(function (btn) {
      btn.setAttribute('aria-expanded', 'false');
    });
    document.body.style.overflow = '';
    setTimeout(function () {
      helpBackdrop.hidden = true;
    }, 250);
  }

  if (helpToggles.length && helpOverlay && helpBackdrop) {
    helpToggles.forEach(function (btn) {
      btn.addEventListener('click', openHelp);
    });
    helpClose.addEventListener('click', closeHelp);
    helpBackdrop.addEventListener('click', closeHelp);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && helpOverlay.classList.contains('is-open')) {
        closeHelp();
      }
    });
  }

  document.querySelectorAll('.product-card__swatch').forEach(function (swatch) {
    swatch.addEventListener('mouseenter', function () {
      var card = swatch.closest('.product-card');
      var img = card && card.querySelector('.product-card__img');
      var newSrc = swatch.getAttribute('data-image');
      if (img && newSrc) {
        img.src = newSrc;
      }
    });
    swatch.addEventListener('click', function (e) {
      e.preventDefault();
    });
  });

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
