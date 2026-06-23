
// Subtask-1:

// Find all the odd numbers from 61 to 100.

// let num = 61;
// while (num <= 100) {
//     // if (num % 2 === 1) {
//     //     console.log(num);
//     // }
//     // However, the if check is unnecessary because you're already increasing by 2 each time, so every value of num is odd.
//     console.log(num);
//     num = num + 2;
// }

// Subtask-2:

// Find all the even numbers from 78 to 98.

// let num = 78;

// while (num <= 98) {
//     console.log(num);
//     num = num + 2;
// }

// If you wanted a more general solution that works regardless of the starting number, you could use:

let num = 78;

while (num <= 98) {
    if (num % 2 === 0) {
        console.log(num);
    }
    num++;
}
