$(window).scroll(function () {
  if ($(this).scrollTop() < 10) {
    $("#box").hide(200);
  } else {
    $("#box").show(200);
  }
});
