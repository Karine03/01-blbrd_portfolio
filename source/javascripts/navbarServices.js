$(document).ready(function() {
  // navbar transition jQuery script
  $(window).scroll(function(e){
    if ($(this).scrollTop() > 0) {
      $(".navbar").css({
        "background": "rgba(255, 255, 255, 1)"
      });
    }
    else {
      $(".navbar").css({
        "background": "transparent"
      });
    }
  });
});
