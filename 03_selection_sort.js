// O(1/2 * n^2) = O(n^2)

const array = [3, 5, 6, 3, 10, 9, 5, 4, 8, 10];
let iterationsCount = 0;

function doSelectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minValueIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      ++iterationsCount;
      if (array[j] < array[minValueIndex]) minValueIndex = j;
    }
    const tempValue = array[i];
    array[i] = array[minValueIndex];
    array[minValueIndex] = tempValue;
  }
  return array;
}

console.log(
  'result:',
  doSelectionSort(array),
  'iteration count:',
  iterationsCount
);
