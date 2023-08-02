//Write a function call makeAvg() which will take three integers and retunrn the average of those value

//Write a function call makeAvg() which will take an array of integers and retunrn the average of those value

function makeAvg(int1, int2, int3) {
    const avg = (int1+int2+int3)/3;
    console.log(avg);
    return avg;
}
makeAvg(10, 20, 30);



function make_avg(numberArr) {
    const arrlength = numberArr.length;
    let number = 0;
    numberArr.forEach((item) => {
        number += item;
    });
    const avg = number/arrlength;
    console.log(avg);
    return avg;
}
make_avg([5, 10, 20, 30, 50]);



const numArr = [5, 10, 15, 35, 90, 40, 60];

function make_avrg(arr) {
    const total = arr.reduce((accumulator, currentValue)=> accumulator + currentValue, 0);
    return total/arr.length;
}

console.log(make_avrg(numArr));