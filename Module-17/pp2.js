// You and your friends Tom, Jane, Peter and John got their final exam results. Your total
// score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
// and John’s total score is 40. The grading chart is
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade

// Write a program to find your and your friends’ grades using if-else.


var myScore = 85;
var tomScore = 66;
var janeScore = 95;
var peterScore = 56;
var johnScore = 40;

var number = myScore;

if (number >= 80) {
    console.log('You have got the "A" grade')
}else if (number >= 60){
    console.log('You have got the "B" grade')
}
else if (number >= 50){
    console.log('You have got the "C" grade')
}
else if (number >= 40){
    console.log('You have got the "D" grade')
}
else {
    console.log('You have failed in the exam');
}