const school = 'Raj UK uttara model school';
console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());

const subject = 'Chemistry';
const book = 'ChemIsTry';

if (subject.toLowerCase === book.toLowerCase){
    console.log('I am reading book aibar porikkhay fayay felbo');
}
else {
    console.log('hudai hudai prista ultai ar vat khawar jonno');
}

const drink = 'water';
const liquid = '    water   ';

if (drink.trim() === liquid.trim()) {
    console.log('panir opor nam jibon');
}
else {
    console.log('somodrai pani ase kaite parina');
}