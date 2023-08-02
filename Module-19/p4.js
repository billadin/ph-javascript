//Write a function call odd_even() which takes an integer value and tell wether this value is even or odd
//You need to do it in 4 ways
//Has return + Has parameter,  No return + Has parameter


function odd_even(num) {
  if (num === 0) {
    return console.log("Not a even or odd number");
  } else if (num /2 === 0) {
    return console.log("Even number");
  } else {
    return console.log("Odd number");
  }
}

odd_even(2);