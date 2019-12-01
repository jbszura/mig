window.onscroll = function() {shrinkNav()};

function shrinkNav() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $("#collapsibleNavbar").parent().css({"padding-top": "10px", "padding-bottom":"10px"});
  } else {
    $("#collapsibleNavbar").parent().css({"padding-top": "30px", "padding-bottom":"20px"});
  }
}

$(function () {

  $(".rocketPiggy").on("mouseover", function () {
    $(this).addClass("vibrate-1");
    $(this).on("mouseout", function () {
      $(this).removeClass("vibrate-1");
    })
  });
  $(".rocketPiggy").on("click", function () {
    $(this).addClass("slide-out-fwd-tl");
    setTimeout(function () {
      $(".rocketPiggy").removeClass("slide-out-fwd-tl");
    }, 1500)
  })
});


  
