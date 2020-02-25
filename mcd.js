/**
* Scrivere qui il codice delle funzioni mcd(x, y) e mcdRecursive(x, y)
**/

function mcd(x, y) {
  while (y != 0) {
    let z = x % y;
    x = y;
    y = z;
  }
  return x;
}
console.log(mcd(3, 12));
