let arr = ['a', 'b', 'c', 'd', 'e'];

let obj = arr.reduce((acc, currentValue, index) => {
  acc[currentValue] = index + 1;
  return acc;
}, {});

console.log(obj);
