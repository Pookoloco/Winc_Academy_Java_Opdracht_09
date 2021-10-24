function squared1(number1, number2) {
  return (number1 * number1) + (number2 * number2);
}

console.log(squared1(2,4)); // 20
console.log(squared1(5,10)); // 125
console.log(squared1(5,6)); // 61

const squared2 = function(number1, number2) {
  return (number1 * number1) + (number2 * number2);

};

console.log(squared2(15,40)); // 1825
console.log(squared2(50,100)); // 12500
console.log(squared2(5,6)); // 61

const squared3 = (number1, number2) => {
  return (number1 * number1) + (number2 * number2);

};

console.log(squared3(12,3)); // 153
console.log(squared3(52,88)); // 10448
console.log(squared3(5,6)); // 61

