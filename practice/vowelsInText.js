// Write a JavaScript program to count the number of vowels in a given string.

const text = 'Write a JavaScript program to count the number of vOwels in a given string.'


// Method 1
function count_vowel1(text) {
    let counter = 0;
    for (let i = 0; i < text.length; i++) {
        if('aeiou'.includes(text[i])) {
            counter ++;
        }
    }
    return counter;
}
console.log(count_vowel1('vnbmcnxmv'));

// Method 2
function count_vowel2(text) {
    const result = text.replace(/[^aeiou]/gi, "").length;
    console.log(result);
}
count_vowel2(text);

//Method 3
function count_vowel3(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}
console.log(count_vowel3(text));