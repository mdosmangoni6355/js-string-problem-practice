function minNumber(a, b, c) {
  if (a < b && a < c) {
    return a;
  } else if (b < a && b < c) {
    return b;
  } else {
    return c;
  }
}
const smallestNumberIs = minNumber(4, 20, 7);
console.log("The smallest number is : ", smallestNumberIs);

// Alternative method Math.min()

function minNumberIs(a, b, c) {
  return Math.min(a, b, c);
}
const resultOfMinNumber = minNumberIs(10, 3, 7);
console.log("Minimum number is : ", resultOfMinNumber);
