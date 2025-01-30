$(document).ready(function () {
  $("#toggleBtn").click(function () {
    $("#toggleDiv").toggleClass("hidden");
  });
});

$(document).ready(function () {
  $("#currentYear").text(new Date().getFullYear());
});

	$(".input-div input, .input-div textarea").focus(function () {
    $(this).parents(".input-div").addClass("active");
  });

  $(".input-div input, .input-div textarea").blur(function () {
    var inputValue = $(this).val();
    if (inputValue == "") {
      $(this).removeClass("filled");
      $(this).parents(".input-div").removeClass("active");
    } else {
      $(this).addClass("filled");
    }
  });
