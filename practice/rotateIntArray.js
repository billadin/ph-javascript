// function rotateLeft(arr, rotations) {
//     rotations = rotations % arr.length;
//     console.log(rotations, arr.length);
    
//     return arr.slice(rotations).concat(arr.slice(0, rotations));
//   }
  
//   // Test the function
//   const inputArray = [1, 2, 3, 4, 5, 6];
//   const numRotations = 3;
//   const rotatedArray = rotateLeft(inputArray, numRotations);
//   console.log("Original Array:", inputArray);
//   console.log("Rotated Array:", rotatedArray);
  

// function reverseArray(arr) {
//     if (arr.length !== 3) {
//       throw new Error("The array must have a length of 3.");
//     }
  
//     return [arr.pop(), arr.pop(), arr.pop()];
//   }
  
//   // Test the function
//   const inputArray = [1, 2, 3];
//   const reversedArray = reverseArray(inputArray);
//   console.log("Original Array:", inputArray);
//   console.log("Reversed Array:", reversedArray);
//   console.log(inputArray);

function reverseArray(arr) {
    if (arr.length !== 3) {
      throw new Error("The array must have a length of 3.");
    }
  
    return arr.reverse();
  }
  
  // Test the function
  const inputArray = [1, 2, 3];
  const reversedArray = reverseArray(inputArray);
  console.log("Original Array:", inputArray);
  console.log("Reversed Array:", reversedArray);
  