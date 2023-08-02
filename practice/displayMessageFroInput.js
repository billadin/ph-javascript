const num = Math.ceil(Math.random()*10);

const gnum = prompt('Guess the number between 1 and 10');
if (gnum !== num) {
    alert('Nice work');    
}
else {
    alert('Not matched');
}