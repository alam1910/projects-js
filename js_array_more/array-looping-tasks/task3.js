// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// const numbers = ['Tom', 'Tim', 'Tin', 'Tik', 'Kat', 'Kut']; // use any of one
var numbers = ['Tom', 'Tim', 'Tin', 'Tik', 'Kat', 'Kut'];
let result = [];

for ( const name of numbers) {
    // result = result + name; // use any of one
    result += name;
}
console.log(result)