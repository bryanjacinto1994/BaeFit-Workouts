$("#spotify").on("mouseenter", function() {
  $("#spotify").animate({
    "right": "0px",
  });
})

$("#spotify").on("mouseleave", function() {
  $("#spotify").animate({
    "right": "-300px",
  })
})