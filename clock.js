
let seconds = document.getElementById("second");
let minute = document.getElementById("minute");
let hour = document.getElementById("hour");


var degrees = 0;
let count = 0;

let secondCount = 6
let minuteCount = .06
let hourCount = .00833333

let secondRotation = 0;
let minuteRotation = 0;
let hourRotation = 0;

setInterval(function() {
    
    // secondRotation = secondCount / 60 * 360;
    // minuteRotation = minuteCount / (60 * 60) * 360;
    // hourRotation = hourCount / (60 * 60 * 12) * 360;

    seconds.style.transform = "rotate(" + (secondRotation += secondCount) + "deg)";
    minute.style.transform = "rotate(" + (minuteRotation += minuteCount) + "deg)";
    hour.style.transform = "rotate(" + (hourRotation += hourCount) + "deg)";

    console.log(secondRotation);

}, 1000);


setInterval(function(){
    console.log("TICK!");
 }, 1000);
