// Write a JavaScript program to calculate the days left before your birthday.
const date = new Date();
const myBirthDate = new Date(date.getFullYear(), 11, 25);


const oneday = 24*60*60*1000;

if (date.getMonth() == 11 && date.getDate() > 25)  {
    myBirthDate.setFullYear(myBirthDate.getFullYear() +1);
}

console.log(Math.ceil((myBirthDate.getTime() - date.getTime()) / oneday));