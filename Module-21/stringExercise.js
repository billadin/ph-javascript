// const text = 'I am a web developer. I am a software QA Engineer'

// // console.log(text.split('', 5));

// "Blue Whale".indexOf("Blue"); // returns  0
// "Blue Whale".indexOf("Blute"); // returns -1
// "Blue Whale".indexOf("Whale", 0); // returns  5
// "Blue Whale".indexOf("Whale", 5); // returns  5
// "Blue Whale".indexOf("Whale", 7); // returns -1
// "Blue Whale".indexOf(""); // returns  0
// "Blue Whale".indexOf("", 9); // returns  9
// "Blue Whale".indexOf("", 10); // returns 10
// console.log("Blue Whale".indexOf("Whale", 11)); // returns 10

// const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

// console.log(p.replace('dog', 'monkey'));
// console.log(p);
// Expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

// const regex = /Dog/i;
// console.log(p.replace(regex, 'ferret'));
// Expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"

// let count = 0;

// function cc(card) {
//   // Only change code below this line
// if ("2356".includes(card)) {
//   count ++;
// } else if ("789".includes(card)){
//   count = count + 0;
// } else if ("10JQKA".includes(card)) {
//   count --;
// }

//   return count > 0 ? `Bet ${count}` : `Hold ${count}`;
//   // Only change code above this line
// }

// console.log(cc(10));

// Setup
// const testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
//   };
  
//   // Only change code below this line
//   const playerNumber = 16;  // Change this line
//   const player = testObj.playerNumber; 

//   console.log(player);

// function phoneticLookup(val) {
//     let result = '';
  
//     // Only change code below this line
//     const lookup = {
//       "alpha": "Adams",
//       "bravo": "Boston",
//       "charlie": "Chicago",
//       "delta": "Denver",
//       "echo": "Easy",
//       "foxtrot": "Frank"
//     }
//     console.log(lookup[val]);
//     result = lookup.val;
//     // Only change code above this line
//     return result;
//   }
  
//   console.log(phoneticLookup("charlie"));

for (let i = 0; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log('foo');
    continue;
  }
  console.log(i);
}