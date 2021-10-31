// O(n)

const array = [1, 4, 5, 3, 12, 5, 7, 3, 8, 6, 12, 43, 2, 7, 4];
let iterationCount = 0;

const doLinearSearch = (array, searhItem) => {
  for (let i = 0; i < array.length; i++) {
    ++iterationCount;
    if (array[i] === searhItem) return i;
  }
  return null;
};

console.log(
  'result:',
  doLinearSearch(array, 5),
  'iteration count:',
  iterationCount
);
