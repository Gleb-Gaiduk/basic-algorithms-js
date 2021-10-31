const array = [3, 5, 6, 3, 10, 9, 5, 4, 8, 10];
let iterationsCount = 0;

function doSelectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minElemIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      ++iterationsCount;
      if (array[j] < array[minElemIndex]) {
        minElemIndex = j;
      }
    }
    const tempValue = array[i];
    array[i] = array[minElemIndex];
    array[minElemIndex] = tempValue;
  }
  return array;
}

console.log(
  'result:',
  doSelectionSort(array),
  'iteration count:',
  iterationsCount
);
