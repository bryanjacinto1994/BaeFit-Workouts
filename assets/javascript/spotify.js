// mouse over cursor change for side buttons
$("#spotifyImg").hover(function(){
  $(this).css("cursor", "pointer");
}, function(){
  $(this).css("cursor", "default");
});

$("#links").hover(function(){
  $(this).css("cursor", "pointer");
}, function(){
  $(this).css("cursor", "default");
});

// on click listener to open spotify and links from the sides
$("#spotifyImg").on("click", function() {

  // check for data state before doing something
  if ($("#spotify").attr("data-state") === "hidden") {
    // show the menu if it's hidden
    $("#spotify").animate({
      "right": "0px",
    });
    // change state
    $("#spotify").attr("data-state", "shown");
  } else {
    // hide the menu if it's shown
    $("#spotify").animate({
      "right": "-300px",
    });
    // change state
    $("#spotify").attr("data-state", "hidden");
  }
});

$("#links").on("click", function() {

  // check for data state before doing something
  if ($("#slideLinks").attr("data-state") === "hidden") {
    // show the menu if it's hidden
    $("#slideLinks").animate({
      "left": "0px",
    });
    // change state
    $("#slideLinks").attr("data-state", "shown");
  } else {
    // hide the menu if it's shown
    $("#slideLinks").animate({
      "left": "-138px",
    });
    // change state
    $("#slideLinks").attr("data-state", "hidden");
  }
});