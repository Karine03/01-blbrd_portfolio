$(document).ready(function() {
  // navbar transition jQuery script
  $(".navbar").hide();
  $(window).scroll(function(e){
    if ($(this).scrollTop() > 0) {
      $(".navbar").show();
      // $(".navbar").css({
      //   "background": "rgba(255, 255, 255, 1)"
      // });
    }
    else {
      $(".navbar").hide();
    }
  });
});
