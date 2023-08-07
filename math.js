const result = Math.pow(3, 8);
// console.log(result);

const number1 = 25;
const number2 = 50;
const gap = Math.abs(number1 - number2);
// console.log(gap);

if (gap < 5) {
  console.log("You will be friends");
} else {
  console.log("You will be away apart");
}

// --------------------------
const number = 1.99955;
const result1 = Math.round(number);
const result2 = Math.ceil(number);
const result3 = Math.floor(number);
// console.log(result3);
// --------------------------

// -----------------------------------------
// Random
// const random = Math.random()*5;
for (let i = 0; i < 12; i++) {
  const random = Math.round(Math.random() * 6);
  console.log(random);
}
// -----------------------------------------
