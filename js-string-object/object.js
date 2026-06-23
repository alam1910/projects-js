// primitive
// basic, primary
const age = 21;
const school = 'rifle square';
const isPassed = true;
// let isDeveloper;
// console.log(isDeveloper);
const subjects = ['bangla', 'english', 'Physics', 'Math'];

// object
// non-primitive
const bottle = {
    brand: 'apple',
    price: 45,
    color: 'white',
    isClean: false,
}

// non-primitive
const subject = {
    name: 'biology',
    teacher: 'rasheda mam',
    examDate: '30 Feb'
    chapters: ['first', 'second', 'third'],
    exams: {
        name: 'Final Exam',
        marks: 100
    }
}

const car = {
    model: 'bmw',
    color: 'black',
    price: 'for me nothing',
    accelerate: function() {
        console.log("Car is accelerating");
    }
};
car.accelerate();