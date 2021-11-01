// Factorial 5: 5 * 4 * 3 * 2 * 1
const factorial = (n) => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};

// Fibonacci sequence
// 1,1,2,3,5,8,13,21
const fibonachi = (numberPosition) => {
  if (numberPosition === 1 || numberPosition === 2) return 1;
  return fibonachi(numberPosition - 1) + fibonachi(numberPosition - 2);
};
