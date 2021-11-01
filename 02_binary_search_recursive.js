// An array should be sorted before the search

const array = [0, 4, 5, 10, 33, 45, 56, 59, 65, 78, 80];
let iterationCount = 0;

function doRecursiveBinarySearch(searchedItem, array, leftIndex, rightIndex) {
  let middlePosition = Math.floor(0.5 * (leftIndex + rightIndex));

  if (searchedItem === array[middlePosition]) return middlePosition;

  if (searchedItem < array[middlePosition]) {
    return doRecursiveBinarySearch(
      searchedItem,
      array,
      leftIndex,
      middlePosition - 1
    );
  } else {
    return doRecursiveBinarySearch(
      searchedItem,
      array,
      middlePosition + 1,
      rightIndex
    );
  }
}

console.log(
  'result: ',
  doRecursiveBinarySearch(78, array, 0, array.length),
  '; iterations number: ',
  iterationCount
);
