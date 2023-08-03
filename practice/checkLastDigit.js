function checkLastDigitSame(num1, num2, num3) {
    const lastDigit1 = num1 % 10;
    const lastDigit2 = num2 % 10;
    const lastDigit3 = num3 % 10;
  
    return lastDigit1 === lastDigit2 && lastDigit2 === lastDigit3;
  }
  
  // Test the function
  
  
console.log(checkLastDigitSame(15, 24, 35));
  