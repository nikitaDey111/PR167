let numbers = [2, 4, 6, 8, 10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

let average = sum / numbers.length;

console.log('Среднее арифметическое элементов массива: ' + average);
