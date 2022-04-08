// $(".navTrigger").click(function () {
//   $(this).toggleClass("active");
//   console.log("Clicked menu");
//   $("#mainListDiv").toggleClass("show_list");
//   $("#mainListDiv").fadeIn();
// });

// $(window).scroll(function () {
//   if ($(document).scrollTop() > 50) {
//     $(".nav").addClass("affix");
//     console.log("OK");
//   } else {
//     $(".nav").removeClass("affix");
//   }
// });

// src = "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js";

$(".navTrigger").click(function () {
  $(this).toggleClass("active");
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});

$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $(".nav").addClass("affix");
    console.log("OK");
  } else {
    $(".nav").removeClass("affix");
  }
});
