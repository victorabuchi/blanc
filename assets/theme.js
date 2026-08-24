document.addEventListener('DOMContentLoaded', function () {
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
