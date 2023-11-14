let arr = ['a', 'b', 'c', 'd', 'e'];

let obj = arr.reduce((acc, currentValue, index) => {
  acc[index + 1] = currentValue;
  return acc;
}, {});

console.log(obj);
