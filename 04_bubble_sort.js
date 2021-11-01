// О(n^2)
const array = [3, 5, 6, 3, 10, 9, 5, 4, 8, 10];
let iterationsCount = 0;

function doBubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    ++iterationsCount;

    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        const tempValue = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tempValue;
      }
    }
  }
  return array;
}

console.log(
  'result:',
  doBubbleSort(array),
  'iteration count:',
  iterationsCount
);
