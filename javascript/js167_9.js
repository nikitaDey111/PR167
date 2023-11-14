let numbers = [2, 3, 4, 5];

let sumOfSquares = 0;

for (let i = 0; i < numbers.length; i++) {
  sumOfSquares += numbers[i] ** 2;
}

console.log('Сумма квадратов элементов массива: ' + sumOfSquares);
