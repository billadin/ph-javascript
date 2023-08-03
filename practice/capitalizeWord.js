// Write a JavaScript program to capitalize the first letter of each word in a given string.

const text = "Capitalize the first letter of each word of a given string";

function makeWordCapital(str) {
    let word_arr = str.split(" ")
    for (let i = 0; i < word_arr.length; i++) {
        let currentWord = word_arr[i];
        let first_car = currentWord.charAt(0).toUpperCase();
        word_arr[i] =  first_car + currentWord.substr(1);
    }
    return word_arr.join(" ");
}
console.log(makeWordCapital(text));