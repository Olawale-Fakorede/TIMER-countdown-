// var timeDisplay = document.getElementById('disPlay');
// var getTime = document.getElementById('input');
// let h = 0;
// let m = 0;
// let s = 0;
// let interval; // Declare interval here so it can be accessed in both functions

// function startTime() {
//     var countDownTime = Number(getTime.value) * 1000;
//     var endTime = new Date().getTime() + countDownTime;

//     interval = setInterval(function() {
//         var now = new Date().getTime();
//         var distance = endTime - now;

//         h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         s = Math.floor((distance % (1000 * 60)) / 1000);

//         timeDisplay.innerHTML = h + ":" + m + ":" + s;

//         if (distance < 0) {
//             clearInterval(interval);
//             timeDisplay.innerHTML = "00:00:00";
//         }
//     }, 1000);
// }

// function stopTime(){
//     clearInterval(interval); // This will stop the timer
//     timeDisplay.innerHTML = "TIMER STOPPED";
// }



var timeDisplay = document.getElementById('disPlay');
var getTime = document.getElementById('input');
let h = 0;
let m = 0;
let s = 0;
let interval; // Declare interval here so it can be accessed in both functions

// Create an audio object
var beepSound = new Audio('beep.wav');

function startTime() {
    var countDownTime = Number(getTime.value) * 1000;
    var endTime = new Date().getTime() + countDownTime;

    interval = setInterval(function() {
        var now = new Date().getTime();
        var distance = endTime - now;

        h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        s = Math.floor((distance % (1000 * 60)) / 1000);

        timeDisplay.innerHTML = h + ":" + m + ":" + s;

        if (distance < 0) {
            clearInterval(interval);
            timeDisplay.innerHTML = "00:00:00";
            beepSound.play(); // Play the beep sound
        }
    }, 1000);
}

function stopTime(){
    clearInterval(interval); // This will stop the timer
    timeDisplay.innerHTML = "TIMER STOPPED";
}