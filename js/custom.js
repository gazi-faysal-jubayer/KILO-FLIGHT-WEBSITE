(function ($) {
  "use strict";

  // MENU CLOSE ON MOBILE CLICK
  $('.navbar-collapse a').on('click', function () {
    $(".navbar-collapse").collapse('hide');
  });

  // SMOOTH SCROLL FOR CUSTOM LINKS
  $('.smoothscroll').click(function (e) {
    e.preventDefault();
    var el = $(this).attr('href');
    if (!el || el === '#') return;

    var elWrapped = $(el);
    if (elWrapped.length) {
      var header_height = $('.navbar').height() || 70;
      var offsetTop = elWrapped.offset().top - header_height;

      $('body,html').animate({
        scrollTop: offsetTop
      }, 500);
    }
  });

  // FORM SUBMISSION NOTIFICATION DEMO
  $('form').on('submit', function (e) {
    e.preventDefault();
    var btn = $(this).find('button[type="submit"]');
    var originalText = btn.html();

    btn.html('<i class="bi bi-check-circle-fill me-2"></i> Message Sent Successfully!').addClass('btn-success');

    setTimeout(function () {
      btn.html(originalText).removeClass('btn-success');
    }, 4000);
  });

})(window.jQuery);
