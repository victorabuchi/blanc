document.addEventListener('DOMContentLoaded', function () {
  var contactToggles = document.querySelectorAll('.contact-widget-toggle');
  var contactWidget = document.getElementById('contact-widget');
  var contactBackdrop = document.getElementById('contact-widget-backdrop');
  var contactLauncher = document.getElementById('contact-widget-launcher');
  var contactClose = document.querySelector('.contact-widget__close');
  var contactNext = document.querySelector('.contact-widget__next');

  function openContact() {
    contactWidget.classList.add('is-open');
    contactWidget.setAttribute('aria-hidden', 'false');
    contactBackdrop.hidden = false;
    contactLauncher.classList.add('is-open');
  }

  function closeContact() {
    contactWidget.classList.remove('is-open');
    contactWidget.setAttribute('aria-hidden', 'true');
    contactBackdrop.hidden = true;
    contactLauncher.classList.remove('is-open');
  }

  if (contactWidget && contactBackdrop && contactLauncher) {
    contactToggles.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (contactWidget.classList.contains('is-open')) {
          closeContact();
        } else {
          openContact();
        }
      });
    });

    if (contactClose) {
      contactClose.addEventListener('click', closeContact);
    }
    contactBackdrop.addEventListener('click', closeContact);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && contactWidget.classList.contains('is-open')) {
        closeContact();
      }
    });

    if (contactNext) {
      contactNext.addEventListener('click', function () {
        var step1 = contactWidget.querySelector('[data-step="1"]');
        var step2 = contactWidget.querySelector('[data-step="2"]');
        var nameInput = document.getElementById('contact-widget-name');
        if (nameInput && !nameInput.value.trim()) {
          nameInput.focus();
          return;
        }
        if (step1 && step2) {
          step1.hidden = true;
          step2.hidden = false;
          var emailInput = document.getElementById('contact-widget-email');
          if (emailInput) {
            emailInput.focus();
          }
        }
      });
    }

    if (contactWidget.classList.contains('is-success')) {
      openContact();
    }
  }

  document.querySelectorAll('.faq-item__question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      if (item) {
        item.classList.toggle('is-open');
      }
    });
  });

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
      var savedConsent = JSON.parse(localStorage.getItem('blanc-cookie-consent') || 'null');
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
          localStorage.setItem('blanc-cookie-consent', JSON.stringify(consent));
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

  var cookieBanner = document.getElementById('cookie-banner');
  var cookieBannerBackdrop = document.getElementById('cookie-banner-backdrop');
  var cookieBannerAccept = document.getElementById('cookie-banner-accept');
  var cookieBannerContinue = document.getElementById('cookie-banner-continue');
  var cookieBannerSettings = document.getElementById('cookie-banner-settings');

  function showCookieBanner() {
    cookieBanner.hidden = false;
    cookieBannerBackdrop.hidden = false;
    requestAnimationFrame(function () {
      cookieBanner.classList.add('is-visible');
      cookieBannerBackdrop.classList.add('is-visible');
    });
  }

  function hideCookieBanner() {
    cookieBanner.classList.remove('is-visible');
    cookieBannerBackdrop.classList.remove('is-visible');
    setTimeout(function () {
      cookieBanner.hidden = true;
      cookieBannerBackdrop.hidden = true;
    }, 250);
  }

  function saveCookieConsent(consent) {
    try {
      localStorage.setItem('blanc-cookie-consent', JSON.stringify(consent));
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
  }

  if (cookieBanner && cookieBannerBackdrop) {
    var hasSavedConsent = true;
    try {
      hasSavedConsent = !!JSON.parse(localStorage.getItem('blanc-cookie-consent') || 'null');
    } catch (e) {
      hasSavedConsent = false;
    }

    if (!hasSavedConsent) {
      showCookieBanner();
    }

    if (cookieBannerAccept) {
      cookieBannerAccept.addEventListener('click', function () {
        saveCookieConsent({ analytics: true, marketing: true, preferences: true });
        document.querySelectorAll('[data-cookie-toggle]').forEach(function (input) {
          input.checked = true;
        });
        hideCookieBanner();
      });
    }

    if (cookieBannerContinue) {
      cookieBannerContinue.addEventListener('click', function () {
        saveCookieConsent({ analytics: false, marketing: false, preferences: false });
        document.querySelectorAll('[data-cookie-toggle]').forEach(function (input) {
          input.checked = false;
        });
        hideCookieBanner();
      });
    }

    if (cookieBannerSettings) {
      cookieBannerSettings.addEventListener('click', function () {
        hideCookieBanner();
        if (cookieToggle) {
          cookieToggle.click();
        }
      });
    }
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

  var contactToggles = document.querySelectorAll('.contact-widget-toggle');
  var contactWidget = document.getElementById('contact-widget');
  var contactBackdrop = document.getElementById('contact-widget-backdrop');
  var contactClose = document.querySelector('.contact-widget__close');
  var contactLauncher = document.getElementById('contact-widget-launcher');
  var contactNext = document.querySelector('.contact-widget__next');

  function openContact() {
    contactWidget.classList.add('is-open');
    contactWidget.setAttribute('aria-hidden', 'false');
    contactBackdrop.hidden = false;
    if (contactLauncher) {
      contactLauncher.classList.add('is-open');
    }
  }

  function closeContact() {
    contactWidget.classList.remove('is-open');
    contactWidget.setAttribute('aria-hidden', 'true');
    contactBackdrop.hidden = true;
    if (contactLauncher) {
      contactLauncher.classList.remove('is-open');
    }
  }

  if (contactToggles.length && contactWidget && contactBackdrop) {
    contactToggles.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (btn === contactLauncher && contactWidget.classList.contains('is-open')) {
          closeContact();
        } else {
          openContact();
        }
      });
    });
    if (contactClose) {
      contactClose.addEventListener('click', closeContact);
    }
    contactBackdrop.addEventListener('click', closeContact);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && contactWidget.classList.contains('is-open')) {
        closeContact();
      }
    });

    if (contactNext) {
      contactNext.addEventListener('click', function () {
        var step1 = contactWidget.querySelector('[data-step="1"]');
        var step2 = contactWidget.querySelector('[data-step="2"]');
        var nameInput = document.getElementById('contact-widget-name');
        if (nameInput && !nameInput.value.trim()) {
          nameInput.focus();
          return;
        }
        if (step1 && step2) {
          step1.hidden = true;
          step2.hidden = false;
          var emailInput = document.getElementById('contact-widget-email');
          if (emailInput) {
            emailInput.focus();
          }
        }
      });
    }

    if (contactWidget.classList.contains('is-success')) {
      openContact();
    }
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

  function formatMoney(cents) {
    var amount = (cents / 100).toFixed(2);
    try {
      return new Intl.NumberFormat(document.documentElement.lang || 'en', {
        style: 'currency',
        currency: window.themeCurrency || 'USD',
      }).format(cents / 100);
    } catch (e) {
      return amount;
    }
  }

  document.querySelectorAll('[data-product-form]').forEach(function (form) {
    var wrapper = form.closest('[data-section-id]');
    var dataEl = wrapper && wrapper.querySelector('[data-product-json]');
    if (!dataEl) return;

    var product = JSON.parse(dataEl.textContent);
    var optionsWrapper = form.querySelector('[data-product-options]');
    var variantInput = form.querySelector('[data-variant-id]');
    var priceEl = form.querySelector('[data-price]');
    var comparePriceEl = form.querySelector('[data-compare-price]');
    var unitPriceEl = form.querySelector('[data-unit-price]');
    var addToCartBtn = form.querySelector('[data-add-to-cart]');
    var addToCartText = form.querySelector('[data-add-to-cart-text]');
    var productImage = wrapper.querySelector('[data-product-image] img');

    function selectedOptionValues() {
      var selected = [];
      if (!optionsWrapper) return selected;
      optionsWrapper.querySelectorAll('[data-option-index]').forEach(function (group) {
        var index = Number(group.getAttribute('data-option-index'));
        var active = group.querySelector('.size-btn.is-active') || group.querySelector('.size-btn:not(.is-sold-out)');
        selected[index] = active ? active.getAttribute('data-option-value') : null;
      });
      return selected;
    }

    function findVariant(selected) {
      return product.variants.filter(function (variant) {
        return variant.options.every(function (value, index) {
          return selected[index] == null || selected[index] === value;
        });
      })[0];
    }

    function updateForVariant(variant) {
      if (variantInput) variantInput.value = variant ? variant.id : '';

      if (priceEl) priceEl.textContent = variant ? formatMoney(variant.price) : '';

      if (comparePriceEl) {
        var onSale = variant && variant.compare_at_price && variant.compare_at_price > variant.price;
        comparePriceEl.hidden = !onSale;
        if (onSale) comparePriceEl.textContent = formatMoney(variant.compare_at_price);
      }

      if (unitPriceEl) {
        var measurement = variant && variant.unit_price_measurement;
        unitPriceEl.hidden = !measurement;
        if (measurement) {
          var referenceValue = measurement.reference_value === 1 ? '' : measurement.reference_value;
          unitPriceEl.textContent = formatMoney(variant.unit_price) + '/' + referenceValue + measurement.reference_unit;
        }
      }

      var available = !!(variant && variant.available);
      if (addToCartBtn) addToCartBtn.disabled = !available;
      if (addToCartText) {
        addToCartText.textContent = !variant
          ? (window.themeStrings ? window.themeStrings.unavailable : 'Unavailable')
          : available
            ? (window.themeStrings ? window.themeStrings.addToBag : 'Add to bag')
            : (window.themeStrings ? window.themeStrings.soldOut : 'Sold out');
      }

      if (productImage && variant && variant.featured_image) {
        productImage.src = variant.featured_image.src;
        productImage.alt = variant.featured_image.alt || productImage.alt;
      }
    }

    if (optionsWrapper) {
      optionsWrapper.querySelectorAll('.size-btn:not(:disabled)').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var group = btn.closest('[data-option-index]');
          group.querySelectorAll('.size-btn').forEach(function (b) {
            b.classList.remove('is-active');
          });
          btn.classList.add('is-active');
          updateForVariant(findVariant(selectedOptionValues()));
        });
      });
    }

    var giftCardToggle = form.querySelector('[data-gift-card-recipient-toggle]');
    var giftCardFieldsWrapper = form.querySelector('[data-gift-card-recipient-fields]');
    var giftCardEmail = form.querySelector('[data-gift-card-recipient-email]');
    var giftCardOffset = form.querySelector('[data-gift-card-offset]');

    if (giftCardToggle && giftCardFieldsWrapper) {
      var giftCardFields = giftCardFieldsWrapper.querySelectorAll('[data-gift-card-recipient-field]');

      var updateGiftCardRecipient = function () {
        var checked = giftCardToggle.checked;
        giftCardFieldsWrapper.hidden = !checked;
        giftCardFields.forEach(function (field) {
          field.disabled = !checked;
        });
        if (giftCardEmail) giftCardEmail.required = checked;
        if (giftCardOffset) giftCardOffset.value = new Date().getTimezoneOffset();
      };

      giftCardToggle.addEventListener('change', updateGiftCardRecipient);
      updateGiftCardRecipient();
    }
  });
});
