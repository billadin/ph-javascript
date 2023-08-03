// Write a JavaScript program to replace every character in a given string with the 
//character following it in the alphabet.

function change_all_char(str) {
    let final_text = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if(char >= 'a' && char <= 'z') {
            final_text += String.fromCharCode(char.charCodeAt(0) + 1);
        } else if (char >= 'A' && char <= 'Z')  {
            final_text += String.fromCharCode(char.charCodeAt(0) + 1);
        } else {
            final_text += char;
        }
    }
    return final_text;
}

console.log(change_all_char('Javascript'));

// function replaceWithNextCharacter(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//       let char = str[i];
//       if (char >= 'a' && char <= 'z') {
//         // For lowercase letters 'a' to 'y', add the next character in the alphabet.
//         result += String.fromCharCode(char.charCodeAt(0) + 1);
//       } else if (char >= 'A' && char <= 'Z') {
//         // For uppercase letters 'A' to 'Y', add the next character in the alphabet.
//         result += String.fromCharCode(char.charCodeAt(0) + 1);
//       } else {
//         // For non-alphabetic characters, keep them as they are.
//         result += char;
//       }
//     }
//     return result;
//   }

//   console.log(replaceWithNextCharacter('Javascript'));

