// সহজ JavaScript সমাধান

let str = "hello all i am niroooo";

let result = str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");

console.log(result);

// loop দিয়েও করা যায়


// let str = "hello all i am niroooo";
// let words = str.split(" ");
// let result = "";

// for (let i = 0; i < words.length; i++) {
//     result += words[i][0].toUpperCase() + words[i].slice(1) + " ";
// }

// console.log(result.trim());