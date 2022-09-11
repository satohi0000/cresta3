$("#c-BTN1").on("click", function () {
  $(this).toggleClass("active");
  $(".p-nav-list").toggleClass("open");
  $(".p-mask").toggleClass("open1");
  $("body").toggleClass("no_scroll");
  return false;
});

$(function () {
  var $win = $(window),
    $fv = $(".p-fv"),
    $fv2 = $(".p-fv2"),
    $header = $(".l-header");
  (fvHeight = $fv.outerHeight()), (fixedClass = "is-fixed");

  $win.on("load scroll", function () {
    var value = $(this).scrollTop();
    if ($win.width() > 768)
      if (value > fvHeight) {
        $header.addClass(fixedClass);
      } else {
        $header.removeClass(fixedClass);
      }
  });
});

$(function () {
  var $win = $(window),
    $fv2 = $(".p-fv2"),
    $header = $(".l-header");
  (fvHeight = $fv2.outerHeight()), (fixedClass = "is-fixed");

  $win.on("load scroll", function () {
    var value = $(this).scrollTop();
    if ($win.width() > 768)
      if (value > fvHeight) {
        $header.addClass(fixedClass);
      } else {
        $header.removeClass(fixedClass);
      }
  });
});

$(".p-fv__slider").slick({
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1000,
  fade: true,
  cssEase: "linear",
});
