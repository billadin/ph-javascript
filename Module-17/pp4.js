// You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
// triangle is Isosceles or not using if-else.

var x = 9;
var y = 8;
var z =9;

if (x == y && y==z) {
    console.log('This is a Equilateral Triangle');
}
else if (x==y || x==z || y==z) {
    console.log('This is a Isosceles triangle');
}
else {
    console.log('This is a Scalene triangle');
}