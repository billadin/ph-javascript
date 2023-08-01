// *************************************************
// Write a JavaScript program to display the current day and time in the following format.
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//Getting current day of week
let date = new Date();
let day = date.getDay();
console.log(`Today is : ${dayList[day]}`);


//Getting hour, minutes, seconds
let hour = date.getHours();
let minute = date.getMinutes();
let seconds = date.getSeconds();


//Addng AM/PM next to hour
let prepand = (hour >= 12) ? 'PM' : 'AM';
hour = hour >= 12 ? hour - 12 : hour;
hour = `${hour} ${prepand}`;


// To set 00 PM as 12 PM 
if (hour === 12 && prepand === 'PM') {
    if (minute === 0 && seconds === 0) {
        hour = 12;
    }
}

// To set 00 AM as 12 AM
if (hour === 12 && prepand === 'AM') {
    if (minute === 0 && seconds === 0) {
        hour = 12;
    }
}

console.log(`Current time is : ${hour} : ${minute} : ${seconds}`);

