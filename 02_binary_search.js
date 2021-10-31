// An array should be sorted before the search

const array = [0, 4, 5, 10, 33, 45, 56, 59, 65, 78, 80];
let iterationCount = 0;

function doBinarySearchWithLoop(searchedItem, array) {
  const state = {
    leftIndex: 0,
    rightIndex: array.length - 1,
    middleIndex: null,
    resultIndex: null,
  };

  while (!state.resultIndex && state.leftIndex < state.rightIndex) {
    ++iterationCount;
    state.middleIndex = Math.floor((state.leftIndex + state.rightIndex) / 2);
    const middleValue = array[state.middleIndex];

    if (middleValue === searchedItem) {
      return state.middleIndex;
    } else if (middleValue > searchedItem) {
      state.rightIndex = --state.middleIndex;
    } else {
      state.leftIndex = ++state.middleIndex;
    }
  }

  return 'not found';
}

console.log(
  'result: ',
  doBinarySearchWithLoop(78, array),
  '; iterations number: ',
  iterationCount
);
