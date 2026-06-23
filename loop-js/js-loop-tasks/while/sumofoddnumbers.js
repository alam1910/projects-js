// Subtask-1:

// Display sum of all the odd numbers from 81 to 131.


// let num = 81;
// let sum = 0;

// while (num < 131) {
//     sum = sum + num;
//     num = num + 2;
//     console.log(num);
// }

// console.log(sum);


// Subtask-2:

// Display sum of all the even numbers from 206 to 311.

let num = 206;
let sum = 0;

while ( num <=311) {
    sum = sum + num;
    num = num + 2;
    console.log(num);
}

console.log('sum of all the even numbers from 206 to 311:', sum);

// Small issue

// The console.log(num) is after the increment, so it prints:

// 208
// 210
// 212
// ...
// 310
// 312

// Notice:

// 206 is not printed.
// 312 is printed even though it's outside the range.