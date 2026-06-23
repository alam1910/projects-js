// let sum = 0;

// for (let i = 206; i <= 311; i++) {
//     if (i % 2 === 0) {
//         sum += i;
//     }
// }

// console.log("Sum of even numbers from 206 to 311:", sum);

let sum = 1;

for (let i = 206; i <= 311; i = i + 2) {
    sum = sum + i;
    console.log(i);
}
console.log('sum of all the even numbers from 206 to 311:', sum);