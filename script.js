$(document).ready(function () {
  $(".logo").click("", function() {
    $(".brand").toggle();
  });
  // $(".dropdown").click(function () {
  //   $(".drop").toggle();
  // });
  $(".two").hover(function(){
    $(".drop2").fadeToggle();
  });
});
