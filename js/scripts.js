$(document).ready(function () {
  $("li#numbers h2").click(function () {
    $("li#numbers .card").toggle();
  });
  $("li#string h2").click(function () {
    $("li#string .card").toggle();
  });
  $("li#boolean h2").click(function () {
    $("li#boolean .card").toggle();
  });
  $("li#null h2").click(function () {
    $("li#null .card").toggle();
  });
  $("li#undefined h2").click(function () {
    $("li#undefined .card").toggle();
  });
  $("#symbol h2").click(function () {
    $("#symbol .card").toggle();
  });
});