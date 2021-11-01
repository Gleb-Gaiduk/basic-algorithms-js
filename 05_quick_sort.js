// O(log2n * n), most efficient
const array = [
  10, 20, 110, 0, -5, 14, 10, 102, 44, 32, 80, 98, 99, 1, -4, -3, 0,
];

function doQuickSort(array) {
  if (array.length <= 1) return array;

  let pivotIndex = Math.floor(0.5 * array.length);
  let pivotValue = array[pivotIndex];

  let lessArr = [];
  let moreArr = [];

  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) continue;

    if (array[i] < pivotValue) {
      lessArr.push(array[i]);
    } else {
      moreArr.push(array[i]);
    }
  }

  return [...doQuickSort(lessArr), pivotValue, ...doQuickSort(moreArr)];
}

console.log(doQuickSort(array));
