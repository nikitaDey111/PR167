
let numbers = [2, 3, 5, 7, 11, 13];
let hasFive = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 5) {
    hasFive = true;
    break;  
  }
}

if (hasFive) {
  console.log('Массив содержит элемент со значением 5.');
} else {
  console.log('Массив не содержит элемент со значением 5.');
}
