// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050

// function getSunday(year) {
//   const d = new Date(year, 0, 1);
//   if (d.getDay() === 0) {
//     console.log(`1st January of ${year} is Sunday`);
//   }
// }

// getSunday(2040);


// function getSunday(from, to) {
//   for (let year = from; year <= to; year++) {
//     const d = new Date(year, 0, 1);
//     if (d.getDay() === 0) {
//       console.log(`1st January of ${year} is Sunday`);
//     }
//   }
// }
// getSunday(2000, 2100);

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function getDayName(from, to) {
  for (let year = from; year <= to; year++) {
    const d = new Date(year, 0, 1);
    console.log(`1st January of ${year} is ${weekdays[d.getDay()]}`);
  }
}
getDayName(2014, 2056);