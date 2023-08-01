// Write a JavaScript program to find the area of a triangle
// where three sides are 5, 6, 7.


const x = 5;
const y = 6;
const z =7;

const perimeter = (x + y + z)/2;
console.log(perimeter);

const area = Math.sqrt(perimeter*((perimeter-x)*(perimeter-y)*(perimeter-z)));

console.log(area);