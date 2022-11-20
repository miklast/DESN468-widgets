//global variables
var swap = 0;

/************
Dynamic Data
************/
// define `theClockApp` stored in function to be ran
const theClockApp = () => {
  
// Get and store current date and time with `new Date()` object
const timeNow = new Date();
// Check-Check: See all `Date()` methods and properties
// console.log( timeNow );

// Get current hours
let gotHours = timeNow.getHours();
// Get current minutes
let gotMinutes = timeNow.getMinutes();
// Get current seconds
let gotSeconds = timeNow.getSeconds();

// Check-Check: Is the data correct? 
// console.log(gotHours, gotMinutes, gotSeconds);

/************
Format Data
************/
// Get AM or PM
const gotAmOrPM = gotHours >= 12 ? 'PM' : 'AM';
// Get 12 hour format
gotHours = gotHours;
// Optionally, append zero to single digit hours
gotHours = gotHours < 10 ? `0${gotHours}` : gotHours;   
// Optionally, append zero to single digit minutes
gotMinutes = gotMinutes < 10 ? `0${gotMinutes}` : gotMinutes;
// Optionally, append zero to single digit seconds
gotSeconds = gotSeconds < 10 ? `0${gotSeconds}` : gotSeconds;

/************
Get DOM Elements
************/
// Get Hours
const hours = document.querySelector(".hours");
// Get minutes
const minutes = document.querySelector(".minutes");
// Get colon
const colon = document.querySelector(".colon");
// Get AM or PM
const amOrPM = document.querySelector('.amOrPM');

/************
Set DOM Elements
************/
// Set the hours
hours.innerText = gotHours;
// Set the minutes
minutes.innerText = gotMinutes;
//set colon
if (swap === 0) {
    swap = 1;
    colon.style.color = "#10c20a";
    colon.style.textShadow = "1px 1px 10px rgba(18, 223, 28, 0.4), 2px 2px 20px rgba(18, 223, 28, 0.4), 3px 3px 30px rgba(18, 223, 28, 0.4), 4px 4px 40px rgba(18, 223, 28, 0.4)";
}
else if (swap === 1) {
    console.log(swap);
    colon.style.color = "#070707";
    colon.style.textShadow = "#070707 2px 2px";
    swap = 0;
}
// Set the seconds
// seconds.innerText = gotSeconds;
// // Set AM or PM
// amOrPM.innerText = gotAmOrPM;
  
}

/************
Run App
************/
// Re-run `theClockApp` every 1 second (1000 ms)
setInterval(theClockApp, 1000);
