// event listener for spotify div button
$("#spotifyImg").on("click", function() {
  var spotify = $("#spotify");
  if (spotify.attr("data-state") === "hidden") {
    spotify.animate({
      "right": "0px",
    });
    spotify.attr("data-state", "shown");
  } else if (spotify.attr("data-state") === "shown") {
    spotify.animate({
      "right": "-300px",
    });
    spotify.attr("data-state", "hidden");
  }
})

// change cursor when hover in/out of spotify logo
$("#spotifyImg").hover(function() {
  $(this).css("cursor", "pointer");
}, function() {
  $(this).css("cursor", "default");
})

// event listener for links button
$("#links").on("click", function() {
  var slideLinks = $("#slideLinks");
  if (slideLinks.attr("data-state") === "hidden") {
    slideLinks.animate({
      "left": "0px",
    });
    slideLinks.attr("data-state", "shown");
  } else if (slideLinks.attr("data-state") === "shown") {
    slideLinks.animate({
      "left": "-138px",
    });
    slideLinks.attr("data-state", "hidden");
  }
})

// change cursor when hover in/out of links
$("#links").hover(function() {
  $(this).css("cursor", "pointer");
}, function() {
  $(this).css("cursor", "default");
})