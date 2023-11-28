function sum(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) return new Error("Invalid divisor zero");
  return num1 / num2;
}

exports.sum = sum;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
