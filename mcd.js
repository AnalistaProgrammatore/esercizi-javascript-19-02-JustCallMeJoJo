/**
* Scrivere qui il codice delle funzioni mcd(x, y) e mcdRecursive(x, y)
**/

// Part One

function mcd(x, y) {
  while (y != 0) {
    let z = x % y;
    x = y;
    y = z;
  }
  return x;
}
console.log(mcd(3, 12));

// Part Two

function mcdRecursive(x, y) {
  if (y === 0) return x;
  else return mcd(y, x % y);
}
console.log(mcd(40, 24));
