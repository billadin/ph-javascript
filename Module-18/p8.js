//Write the price of the books you have, display the prices only if the price is lower than 200
let bookPrices = [199, 210, 350, 150, 400, 999, 201, 200]

for (let i=0; i < bookPrices.length; i++) {
    if (bookPrices[i] >= 200) {
        continue;
    }
    console.log(bookPrices[i]);
}