/**
* Scrivere qui il codice della funzione fibonacci(n)
**/

function fibonacci(x) {
  if (x <= 1) {
    return x;
  } else {
    return fibonacci(x - 1) + fibonacci(x - 2);
  }
}

for (let n = 0; n < 30; n++) {
  console.log(fibonacci(n));
}
