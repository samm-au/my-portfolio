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

var messages = ["message1", "message2  message2 message2", "message3 message3"];
var rank = 0;

// Code for Chrome, Safari and Opera
document
  .getElementById("typewriter")
  .addEventListener("webkitAnimationEnd", changeTxt);

function changeTxt(e) {
  _h1 = this.getElementsByTagName("p")[0];
  _h1.style.webkitAnimation = "none"; // set element animation to none
  setTimeout(function () {
    // you surely want a delay before the next message appears
    _p.innerHTML = messages[rank];
    var speed = (3.5 * messages[rank].length) / 20; // adjust the speed (3.5 is the original speed, 20 is the original string length
    _p.style.webkitAnimation =
      "typing " +
      speed +
      "s steps(40, end), blink-caret .75s step-end infinite"; //  switch to the original set of animation
    rank === messages.length - 1 ? (rank = 0) : rank++; // if you have displayed the last message from the array, go back to the first one, else go to next message
  }, 1000);
}
