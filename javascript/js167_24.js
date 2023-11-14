let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let keysSum = 0;
let valuesSum = 0;

for (let key in obj) {
  keysSum += parseInt(key);
  valuesSum += obj[key];
}

let result = keysSum / valuesSum;

console.log(result);
