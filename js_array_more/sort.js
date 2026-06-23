const persons = ['rakib', 'sakin', 'Mostak', 'jakria', 'fari', 'anis', 'Anis'];
const sortedPersons = persons.sort();
console.log(sortedPersons);


// sort -->
const numbers = [4, 1, 5, 6, 62, 6, 7, 8, 2, 8];
// Ascending --> smaller to larger
// Descending --> larger to smaller

// const numbers_asc = numbers.sort(); // not working
const numbers_asc = [...numbers].sort(function (a, b) { return a - b});
const numbers_dsc = [...numbers].sort(function (a, b) { return b - a});


console.log(numbers_asc);
console.log(numbers_dsc);

