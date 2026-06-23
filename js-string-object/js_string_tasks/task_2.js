// Count how many times a string has the letter a or A
let str = "Apple and Banana";
let count = 0;

for(let i = 0; i < str.length; i++) {
    if (str[i] === "a" | str[i] === "A"){
        count++;
    }
}
console.log(count);

// আরও ছোট উপায়ে:

// let str = "hello all i am Niroooo";

// let count = str.split("a").length - 1;

// console.log(count);