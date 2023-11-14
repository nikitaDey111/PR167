let arr = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < arr.length; i++) {
  let numStr = arr[i].toString();
  let firstDigit = numStr.charAt(0);
  if (firstDigit === '1' || firstDigit === '2' || firstDigit === '5') {
    console.log(arr[i]);
  }
}
