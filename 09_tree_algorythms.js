const tree = [
  {
    v: 5,
    c: [
      {
        v: 10,
        c: [
          {
            v: 11,
          },
        ],
      },
      {
        v: 7,
        c: [
          {
            v: 5,
            c: [
              {
                v: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    v: 5,
    c: [
      {
        v: 10,
      },
      {
        v: 15,
      },
    ],
  },
];

const recursive = (tree) => {
  let sum = 0;

  tree.forEach((node) => {
    if (node.v) sum += node.v;
    if (!node.c) return;
    sum += recursive(node.c);
  });
  return sum;
};

const iteration = (tree) => {
  let sum = 0;
  let stack = [];

  tree.forEach((node) => stack.push(node));

  while (stack.length) {
    const node = stack.pop();
    if (node.v) sum += node.v;
    if (node.c) {
      node.c.forEach((child) => stack.push(child));
    }
  }
  return sum;
};

console.log(iteration(tree));
// console.log(recursive(tree));
