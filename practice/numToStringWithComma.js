function division_string(n1, n2) {

  var div = Math.round(n1 / n2).toString();
  let result_array = div.split("");

//   if (div >= 1000) {
//     for (var i = div.length - 3; i > 0; i -= 3) {
//       result_array.splice(i, 0, ",");
//     }
//     result_array;
//   }
  console.log(result_array);
}

division_string(80, 6);

