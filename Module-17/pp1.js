// You are given an array:

// var fruits = ['Apple', 'Banana', 'Orange'];

// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.

var fruits = ['Apple', 'Bannana', 'Orange'];

var removedItem = fruits.pop();
fruits.push('Watermelon');


console.log(removedItem);
console.log(fruits);