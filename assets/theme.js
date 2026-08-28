document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.site-footer__links-title').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var col = btn.closest('.site-footer__links-col');
      if (col) {
        col.classList.toggle('is-open');
      }
    });
  });

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
    drawer.querySelectorAll('a, button:not(.help-overlay-toggle):not(.discover-overlay-toggle)').forEach(function (link) {
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

  var cookieToggle = document.querySelector('.site-footer__cookie-toggle');
  var cookieOverlay = document.getElementById('cookie-overlay');
  var cookieBackdrop = document.getElementById('cookie-overlay-backdrop');
  var cookieClose = document.querySelector('.cookie-overlay__close');
  var cookieConfirm = document.querySelector('.cookie-overlay__confirm');

  function openCookie() {
    cookieOverlay.classList.add('is-open');
    cookieOverlay.setAttribute('aria-hidden', 'false');
    cookieBackdrop.hidden = false;
    requestAnimationFrame(function () {
      cookieBackdrop.classList.add('is-visible');
    });
    document.body.style.overflow = 'hidden';
  }

  function closeCookie() {
    cookieOverlay.classList.remove('is-open');
    cookieOverlay.setAttribute('aria-hidden', 'true');
    cookieBackdrop.classList.remove('is-visible');
    document.body.style.overflow = '';
    setTimeout(function () {
      cookieBackdrop.hidden = true;
    }, 250);
  }

  if (cookieToggle && cookieOverlay && cookieBackdrop) {
    cookieToggle.addEventListener('click', openCookie);
    cookieClose.addEventListener('click', closeCookie);
    cookieBackdrop.addEventListener('click', closeCookie);

    try {
      var savedConsent = JSON.parse(localStorage.getItem('frozenholm-cookie-consent') || 'null');
      if (savedConsent) {
        document.querySelectorAll('[data-cookie-toggle]').forEach(function (input) {
          var key = input.getAttribute('data-cookie-toggle');
          if (typeof savedConsent[key] === 'boolean') {
            input.checked = savedConsent[key];
          }
        });
      }
    } catch (e) {}

    if (cookieConfirm) {
      cookieConfirm.addEventListener('click', function () {
        var consent = {};
        document.querySelectorAll('[data-cookie-toggle]').forEach(function (input) {
          consent[input.getAttribute('data-cookie-toggle')] = input.checked;
        });
        try {
          localStorage.setItem('frozenholm-cookie-consent', JSON.stringify(consent));
        } catch (e) {}

        if (
          window.Shopify &&
          window.Shopify.customerPrivacy &&
          typeof window.Shopify.customerPrivacy.setTrackingConsent === 'function'
        ) {
          window.Shopify.customerPrivacy.setTrackingConsent({
            analytics: !!consent.analytics,
            marketing: !!consent.marketing,
            preferences: !!consent.preferences,
            sale_of_data: !!consent.marketing
          }, function () {});
        }

        closeCookie();
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && cookieOverlay.classList.contains('is-open')) {
        closeCookie();
      }
    });
  }

  var locationToggles = document.querySelectorAll('.site-footer__location-toggle, .location-overlay-toggle');
  var locationOverlay = document.getElementById('location-overlay');
  var locationBackdrop = document.getElementById('location-overlay-backdrop');
  var locationClose = document.querySelector('.location-overlay__close');
  var locationSearch = document.getElementById('location-search');

  function openLocation() {
    locationOverlay.classList.add('is-open');
    locationOverlay.setAttribute('aria-hidden', 'false');
    locationBackdrop.hidden = false;
    requestAnimationFrame(function () {
      locationBackdrop.classList.add('is-visible');
    });
    document.body.style.overflow = 'hidden';
  }

  function closeLocation() {
    locationOverlay.classList.remove('is-open');
    locationOverlay.setAttribute('aria-hidden', 'true');
    locationBackdrop.classList.remove('is-visible');
    document.body.style.overflow = '';
    setTimeout(function () {
      locationBackdrop.hidden = true;
    }, 250);
  }

  if (locationToggles.length && locationOverlay && locationBackdrop) {
    locationToggles.forEach(function (btn) {
      btn.addEventListener('click', openLocation);
    });
    locationClose.addEventListener('click', closeLocation);
    locationBackdrop.addEventListener('click', closeLocation);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && locationOverlay.classList.contains('is-open')) {
        closeLocation();
      }
    });

    if (locationSearch) {
      locationSearch.addEventListener('input', function () {
        var query = locationSearch.value.trim().toLowerCase();
        document.querySelectorAll('.location-overlay__item').forEach(function (item) {
          var name = (item.getAttribute('data-country-name') || '').toLowerCase();
          item.hidden = query.length > 0 && name.indexOf(query) === -1;
        });
      });
    }
  }

  var discoverToggles = document.querySelectorAll('.discover-overlay-toggle');
  var discoverOverlay = document.getElementById('discover-overlay');
  var discoverBackdrop = document.getElementById('discover-overlay-backdrop');
  var discoverClose = document.querySelector('.discover-overlay__close');

  function openDiscover() {
    if (drawer && drawer.classList.contains('is-open')) {
      closeDrawer();
    }
    discoverOverlay.classList.add('is-open');
    discoverOverlay.setAttribute('aria-hidden', 'false');
    discoverBackdrop.hidden = false;
    requestAnimationFrame(function () {
      discoverBackdrop.classList.add('is-visible');
    });
    discoverToggles.forEach(function (btn) {
      btn.setAttribute('aria-expanded', 'true');
    });
    document.body.style.overflow = 'hidden';
  }

  function closeDiscover() {
    discoverOverlay.classList.remove('is-open');
    discoverOverlay.setAttribute('aria-hidden', 'true');
    discoverBackdrop.classList.remove('is-visible');
    discoverToggles.forEach(function (btn) {
      btn.setAttribute('aria-expanded', 'false');
    });
    document.body.style.overflow = '';
    setTimeout(function () {
      discoverBackdrop.hidden = true;
    }, 250);
  }

  if (discoverToggles.length && discoverOverlay && discoverBackdrop) {
    discoverToggles.forEach(function (btn) {
      btn.addEventListener('click', openDiscover);
    });
    discoverClose.addEventListener('click', closeDiscover);
    discoverBackdrop.addEventListener('click', closeDiscover);
    discoverOverlay.querySelectorAll('a, .discover-overlay__link').forEach(function (link) {
      link.addEventListener('click', closeDiscover);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && discoverOverlay.classList.contains('is-open')) {
        closeDiscover();
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
