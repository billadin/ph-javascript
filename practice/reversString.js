// Write a JavaScript program to reverse a given string

const str = 'Javascript Developer';

function reverse_str(str) {
    const reversed_text = str.split('').reverse().join("");
    console.log(reversed_text);
}

reverse_str(str);