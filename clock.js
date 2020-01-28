
let seconds = document.getElementById("second");
let minute = document.getElementById("minute");
let hour = document.getElementById("hour");


var degrees = 45;
count = 0

setInterval(function() {
seconds.style.transform = "rotate(" + (6 + count) + "deg)";
count += 6;
}, 1000);


setInterval(function(){
    console.log("TICK!");
 }, 1000);

