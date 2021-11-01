// Queue - FIFO
// Is there a route from one point to the other?

const graph = {
  a: ['b', 'c'],
  b: ['f'],
  c: ['d', 'e'],
  d: ['f'],
  e: ['f'],
  f: ['g'],
};

function doBreadthSearch(graph, startPoint, endPoint) {
  let queue = [];
  queue.push(startPoint);

  while (queue.length > 0) {
    const currentPoint = queue.shift();

    if (!graph[currentPoint]) {
      // No routes from this point
      graph[currentPoint] = [];
    }

    if (graph[currentPoint].includes(endPoint)) {
      return true;
    } else {
      queue = [...queue, ...graph[currentPoint]];
    }
  }
  return false;
}

console.log(doBreadthSearch(graph, 'a', 'g'));
