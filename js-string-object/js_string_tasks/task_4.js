// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

let str = "Xerox xylophone";
let result =str.replaceAll("x","y").replaceAll("X","Y");
console.log(result);


// Loop ব্যবহার করে
// let str = "Xerox xylophone";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//     if (str[i] === "x") {
//         result += "y";
//     } else if (str[i] === "X") {
//         result += "Y";
//     } else {
//         result += str[i];
//     }
// }

// console.log(result);