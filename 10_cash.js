function cashFunction(fn) {
  const cash = {};

  return (n) => {
    if (cash[n]) {
      console.log('Result from cash');
      return cash[n];
    }

    const result = fn(n);
    cash[n] = result;
    return result;
  };
}

function getFactorial(n) {
  let result = 1;

  while (n !== 1) {
    result *= n;
    n -= 1;
  }

  return result;
}

const test = cashFunction(getFactorial);
console.log(test(5));
console.log(test(5));
