 $(document).ready(function(){
    //  Declaration of variables
    var queryURL;

    calcGeoLocation();

// Function to calculate current location of user
function calcGeoLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        location = "Location not found";
    }
}

function showPosition(position){
    // Pushing the value to the DOM
    startLat = position.coords.latitude;
    startLong = position.coords.longitude;
    apiCall(startLat,startLong);    
}
        function apiCall(startLat, startLong){
        // My query URL
        queryURL = "https://www.hikingproject.com/data/get-trails?lat=" + startLat + "&lon=" + startLong + "&maxDistance=10&key=200595352-77e13f2d759dbcd29bbde8b635ba9b65";
            // Querying the base URL to get required response using AJAX method
            $.ajax({
                url : queryURL,
                method : "GET"
            }).then(function(response){
                console.log(response);
                // Iterating through the response array
                for(var i=0; i<7; i++){
                // Creating new div to append images to the html page
                var newDiv = $("<div>");
                // Create active class for first image received as response
                    if(i === 0){
                   newDiv.addClass("carousel-item active");
                    }
                    // Create non active class for rest of images received
                    else{
                    newDiv.addClass("carousel-item");
                    }
                    // Creating new image tag and appending to div
                //    var imgBtn = $("<button>");
                //    imgBtn.attr("id","image" + i)
                   var imageTag = $("<img>");
                   imageTag.attr("id","imgBtn"+i);
                   imageTag.attr("src",response.trails[i].imgMedium);
                   imageTag.attr("style","height: 600px; width: 300px");
                   imageTag.addClass("imageBtn d-block w-100 shadow-lg p-3 mb-5 bg-dark rounded");
                   imageTag.attr("alt",i);
                //    imgBtn.append(imageTag);
                   newDiv.append(imageTag);
                   $("#imgDiv").append(newDiv);
                }

            // When first image is clicked
            $("#imgBtn0").on("click",function(){
                console.log("image0 is clicked");
                $("#name").empty();
                $("#summary").empty();
                $("#location").empty();
                $("#name").append("<h3>" + response.trails[0].name + "</h3>" + "<br>");
                $("#summary").append(response.trails[0].summary + "<br>");
                $("#location").append(response.trails[0].location + "<br>");
            });

            // Triggered when second image is clicked
             $("#imgBtn1").on("click",function(){
                console.log("image1 is clicked");
                $("#name").empty();
                $("#summary").empty();
                $("#location").empty();
                $("#name").append("<h3>" + response.trails[1].name + "</h3>" + "<br>");
                $("#summary").append(response.trails[1].summary + "<br>");
                $("#location").append(response.trails[1].location + "<br>");
             });

            // Triggered when third image is clicked
            $("#imgBtn2").on("click",function(){
               console.log("image2 is clicked");

            $("#name").empty();
            $("#summary").empty();    
            $("#location").empty();
            $("#name").append("<h3>" + response.trails[2].name + "</h3>" +"<br>");
            $("#summary").append(response.trails[2].summary + "<br>");
            $("#location").append(response.trails[2].location + "<br>");
            });

            // Triggered when fourth image is clicked
            $("#imgBtn3").on("click",function(){
                console.log("image3 is clicked");
         
             $("#name").empty();
             $("#summary").empty();  
             $("#location").empty(); 
             $("#name").append("<h3>" + response.trails[3].name + "</h3>" + "<br>");
             $("#summary").append(response.trails[3].summary + "<br>");
             $("#location").append(response.trails[3].location + "<br>");
             });

             // Triggered when fifth image is clicked
             $("#imgBtn4").on("click",function(){
                console.log("image4 is clicked");

             $("#name").empty();
             $("#summary").empty();
             $("#location").empty();
             $("#name").append("<h3>" + response.trails[4].name + "</h3>" + "<br>");
             $("#summary").append(response.trails[4].summary + "<br>");
             $("#location").append(response.trails[4].location + "<br>");
             });

             // Triggered when sixth image is clicked
             $("#imgBtn5").on("click",function(){
                console.log("image5 is clicked");
             $("#name").empty();
             $("#summary").empty();
             $("#location").empty();
             $("#name").append("<h3>" + response.trails[5].name + "</h3>" + "<br>");
             $("#summary").append(response.trails[5].summary + "<br>");
             $("#location").append(response.trails[5].location + "<br>");
             });

             // Triggered when seventh image is clicked
             $("#imgBtn6").on("click",function(){
                console.log("image6 is clicked");
         
             $("#name").empty();
             $("#summary").empty();
             $("#location").empty();
             $("#name").append("<h3>" + response.trails[6].name + "</h3>" + "<br>");
             $("#summary").append(response.trails[6].summary + "<br>");
             $("#location").append(response.trails[6].location + "<br>");
             });
        });
    }   
    });
