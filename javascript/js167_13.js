let arr = [3, -4, 5, -6, 7, -8, 9];

let sumOfPositives = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    sumOfPositives += arr[i];
  }
}

console.log('Сумма положительных элементов массива: ' + sumOfPositives);
