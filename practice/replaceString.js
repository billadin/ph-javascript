// Write a JavaScript program to create another string by adding "Py" in front of a given string.
//  If the given string begins with "Py" return the original string.

const myString = 'Python';

function stringCheck(str) {
    if ( str === null || str === undefined || str.substring(0, 2) === 'Py') {
        return str;
    }
    return 'Py'+str;
}

console.log(stringCheck(myString));
