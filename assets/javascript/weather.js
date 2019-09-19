// declare global variable to store latitude and longitude
var lat,
    lon;

// prompt user for geolocation permission
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        // set lat and lon
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        weather();
    });
} else {
    console.log("Geolocation not supported in browser!")
}

// call openweathermap for deets!
function weather(){
    var APIKey = "96f902ee5cbadb67440defd501103a74";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + APIKey;

$.ajax({
    url: queryURL,
    method: "GET"
})
.then(function(response){
    // append information to navbar
    $("#weather").html("It is currently " + response.main.temp + "° (F) in " + response.name)    
})

}