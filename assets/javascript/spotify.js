$("iframe").on("mouseover", function() {
  $("#spotify").animate({
    "right": "0px",
  });
})

$("iframe").on("mouseout", function() {
  $("#spotify").animate({
    "right": "-295px",
  })
})