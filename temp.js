let first = 4;
let second = 9;
console.log(first, second);

// Wrong approach ---------

// first = second;
// second = first;
// console.log(first, second);

// Approach 1 this will be work -----

// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// Approach 2 ---- Destructuring
[first, second] = [second, first];
// console.log(second, first);
console.log(first, second);