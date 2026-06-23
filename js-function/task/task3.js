// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers, size) {
    let sum = 0;
    
    for (let i =0; i<size; i++){
        sum = sum + numbers[i];
    }
    return sum/size;
}
const arrNumbers = [12, 44, 45, 35, 34, 676, 86];
const average = make_avg(arrNumbers, arrNumbers.length);
console.log(average);