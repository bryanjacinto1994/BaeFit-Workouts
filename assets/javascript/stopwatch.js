// Variable declarations
var interval;
var time = 0;
var lap = 0;
var now;
var minutes;
var seconds;
var milliseconds;
// Below function runs only when html page is fully loaded
$(document).ready(function(){

    // Function is executed when start button is clicked
    $("#startBtn").on("click",function(){
        // Calls count function every one second
        clearInterval(interval);
        time = 0;
        interval = setInterval(count, 10);

    });

    // Function is executed when lap button is clicked
    $("#lapBtn").on("click",function(){
        now = timeFormat(time);
        $("#laps").append("<div>"+now+"</div");
        lap = lap + 1;

    });

    // Function is executed when reset button is clicked
    $("#resetBtn").on("click",function(){
        time = 0;
        lap = 1;
        clearInterval(interval);
        $("#displayTime").html("<div>" + "00:00:00" + "</div>")

    });

    // This function increments timer
    function count(){
        time = time + 1;
        now = timeFormat(time);
        // Time is displayed
        $("#displayTime").text(now);
    }

    // Function that formats time
    function timeFormat(time){
        minutes = Math.floor (time / 6000); 
        console.log("minutes" + minutes);
        seconds = Math.floor((time / 100));
        console.log("seconds" + seconds); 
        milliseconds = time - (seconds * 100);
        console.log("milliseconds" + milliseconds);

        if(milliseconds < 10){
            milliseconds = "0" + milliseconds;
        }

        // if(seconds === 0){
        //     seconds = "00";
        // }
        // If seconds is less than zero, we concantenate 0 with seconds on timer
        if(seconds < 10){
            seconds = "0" + seconds;
        }

        // Minutes zero, then minutes in timer is set to "00"
        if(minutes === 0){
            minutes = "00";
        }
        // If minutes is less than 10 then concantenate "0" and minutes in timer
        else if(minutes < 10){
            minutes = "0" + minutes;
        }                    

        // Return calculated format to variable "now"
        return minutes + ":" + seconds + ":" + milliseconds;
    }

    // Function is executed when stop button is clicked
    $("#stopBtn").on("click",function(){
        // Clearinterval function is used to stop timer
        clearInterval(interval);

    });

});