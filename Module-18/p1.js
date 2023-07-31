//Display "Ajke amar mon bhalo nei 39 times using loops"

var myText = "Ajk amar mon valo nei";

counter = 0;
while (counter < 39) {
    console.log(myText);
    counter++;
}

for (let i = 1; i <= 39; i++) {
    console.log(i +". " + myText);
}