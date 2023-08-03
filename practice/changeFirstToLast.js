// Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters.
//  The string length must be broader than or equal to 1.

const str = 'Javascript';

function firstToLast(str) {
    const mid_char = str.substring(1, str.length -1)
    const first_char = str.charAt(0);
    const last_char = str.charAt(str.length - 1);
    return last_char+mid_char+first_char;
}

const changed_text = firstToLast(str);
console.log(changed_text);

