//Write a program to get the extension from a file name

function getFileExtension(fileName) {
    let fextension = fileName.split('.').pop();
    console.log(fextension);
}


let filename = 'system.php';
let filename1 = 'abc.js';


getFileExtension(filename);
