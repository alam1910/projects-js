const person = {
    name: 'sodor uddin',
    age: 25,
    profession: 'developer',
    salary: 25000,
    marrid: true,
    'fav places': ['bandorban', 'saintmatin', 'kuakata']
}

// console.log(person);

// dot notation
// console.log(person.profession);
// access to properties value of an object using dot
const income = person.salary;
// console.log(income);

// bracket notation
// access using third bracket
console.log(person['age'])
const boyos = person['age']
console.log(boyos)

// error
// console.log(person.'fav places')
console.log(person["fav places"])
console.log(person['fav places'])

const KeyName = 'profession';
console.log(person[KeyName])