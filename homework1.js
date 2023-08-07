// -------- Method 1 if else condition -----------

// function maxNumber(num1, num2, num3){
//     if (num1 > num2 && num1 > num3){
//         console.log("num1 will get the cake");
//     }
//     else if (num2 > num1 && num2 > num3){
//         console.log("num2 will get the cake");
//     }
//     else {
//         console.log("num3 will get the cake")
//     }
// }
// maxNumber(150, 91, 19);

// -------- Method 2 function Math.max -----------

// function maxNumber(num1, num2, num3){
//     const findMaxNumber = Math.max(num1, num2, num3);
//     return findMaxNumber;
// }
// const result = maxNumber(15, 91, 19);
// console.log(result);

// Function 1
function maxNumber(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}
const result1 = maxNumber(15, 91, 199);
console.log(result1);
