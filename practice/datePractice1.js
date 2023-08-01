//**************************************************** */
// Write a JavaScript program to get the current date.
// Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const date = new Date();
const d = date.getDate();
const m = date.getMonth();
const y = date.getFullYear();
console.log(`${m}-${d}-${y}`);
console.log(`${m}/${d}/${y}`);