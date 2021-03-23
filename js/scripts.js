$(document).ready(function () {
  $("li#numbers h2").click(function () {
    $("li#numbers .card").toggle();
  });
  $("li#string h2").click(function () {
    $("li#string .card").toggle();
  });
});