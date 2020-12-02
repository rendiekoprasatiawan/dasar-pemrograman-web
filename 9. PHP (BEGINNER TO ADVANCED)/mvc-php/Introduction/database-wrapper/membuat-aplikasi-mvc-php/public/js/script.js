(function ($) {
  "use strict";

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
  });
})(jQuery);

// smooth scrolling
/* menggunakan JQuery */
// event pada saat di klik
$(".wrapper a").on("click", function (e) {
  // ambil isi href
  const href = $(this).attr("href");
  // tangkap elemen ybs
  const offsetTop = $(href);
  // pindahkan scroll
  $("html, .documentation").animate(
    {
      scrollTop: offsetTop.offset().top - 200,
    },
    1000,
    "easeInOutExpo"
  );
  // nilai default dicegah
  e.preventDefault;
});
