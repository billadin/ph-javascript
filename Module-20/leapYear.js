// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

// function leapYear(year) {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 console.log(`${year} is a leap year`);
//             } else {
//                 console.log('Not a leap year');
//             }
//         } else {
//             console.log(`${year} is a leap year`);
//         }
//     } else {
//         console.log(`${year} is not a leap year`);
//     }
// }

leapYear(2100);

// function leapYear(year) {
//   if (year % 100 === 0) {
//     if (year % 400 === 0) {
//       console.log("Leap year");
//     } else {
//       console.log("Not a leap year");
//     }
//   } else if (year % 4 === 0) {
//     console.log("Leap Year");
//   } else {
//     console.log("Not a leap year");
//   }
// }

function leapYear(year) {
    const findYear =  year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
    if (findYear) {
        console.log('Leap Year');
    } else {
        console.log('Not a leap year');
    }
}