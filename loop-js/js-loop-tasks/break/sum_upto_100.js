// Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
    console.log(i);

    if (sum >= 100) {
        console.log("Sum reached:", sum);
        break;
    }
}

// with While loop

// let sum = 1;
// let i = 1;

// while (i<=110){
//     sum = sum+i;
//     console.log("Added:", i, "Sum:", sum);

//     if (i>=100){
//         break;
//     }
//     console.log(i);
//     i++;
// }