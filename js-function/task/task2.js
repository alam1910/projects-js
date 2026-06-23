// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function multiplyOddorNDivideEven(number) {
    const num = number;
    if (num % 2 === 1) {
        return num * 2;
    }
    else {
        return num / 2;
    }
}
// const doMath = multiplyOddorNDivideEven(4);
const doMath = multiplyOddorNDivideEven(6);
// const doMath = multiplyOddorNDivideEven(25);
// const doMath = multiplyOddorNDivideEven(64);
// const doMath = multiplyOddorNDivideEven(46);
console.log(doMath);