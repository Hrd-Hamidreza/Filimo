//!---------------------------------------------------- Header -------------------------------------------------------
$("#hamburger-header__open").click(function () {
  $(".header__content-right-second").animate(
    {
      right: 0,
    },
    500
  );
  $("html").css("overflow", "hidden");
});

$("#hamburger-heaeder__close").click(function () {
  $(".header__content-right-second").animate(
    {
      right: "-41vw",
    },
    500
  );
  $("html").css("overflow", "auto");
});

//!---------------------------------------------------- Header -------------------------------------------------------

$("#hamburger-footer__open").click(function () {
  $(".footer__content-right-second").animate(
    {
      right: 0,
    },
    500
  );
  $("html").css("overflow", "hidden");
});
$("#hamburger-footer__close").click(function () {
  $(".footer__content-right-second").animate(
    {
      right: "-41vw",
    },
    500
  );
  $("html").css("overflow", "auto");
});
