// Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

// Input: [1, 2, 3]

const original = [1, 2, 3];

// Copy the array
const copied = [...original];

// Change the first element
copied[0] = 99;

console.log("Original:", original);
console.log("Copied:", copied);