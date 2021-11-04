const obj = {
  name: 'Hleb',
  data: {
    company: 'Accenture',
    salary: '5000',
    goals: [
      { priority: 'high', description: 'Buy a house' },
      { priority: 'low', description: 'Get married' },
    ],
  },
  sayHi() {
    console.log('Hi');
  },
};

function makeDeepCopy(obj) {
  let resultObject = null;

  if (typeof obj !== 'object') return obj;

  resultObject = Array.isArray(obj) ? [] : {};

  for (const [key, value] of Object.entries(obj)) {
    resultObject[key] = makeDeepCopy(value);
  }

  return resultObject;
}

const myCopy = makeDeepCopy(obj);
console.log(myCopy);
console.log(obj);
