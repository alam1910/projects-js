const person = {
    name: 'sodor uddin',
    age: 25,
    profession: 'developer',
    salary: 25000,
    marrid: true,
    'fav places': ['bandorban', 'saintmatin', 'kuakata']
}

person.salary = 30000; //if you want to change value
person['age'] = 26;
person['fav places'] = ['maldives', 'bali', 'pataya']
// console.log(person);

const propName = 'profession';
person[propName] = 'devops'
console.log(person)