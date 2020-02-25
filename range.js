/**
* Scrivere qui il codice dell'esercizio 1 del capitolo 4 di eloquentJS
**/

const x = function range(start, end) {
  let arrayRange = [];
  while (start <= end) {
    arrayRange.push(start);
    start++;
  }
  return arrayRange;
};
let y = x(4, 15);
console.log(y);
