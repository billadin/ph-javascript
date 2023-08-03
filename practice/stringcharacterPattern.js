// Write a JavaScript program to check whether the characters a and b are separated by exactly 3 
// places anywhere (at least once) in a given string.

const text = 'Chainsrebak'

function str_position_check(str) {
    return (/a.....b/).test(str) || (/b..a/).test(str);
}

console.log(str_position_check(text));