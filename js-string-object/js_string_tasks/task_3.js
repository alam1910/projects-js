// Check whether a string contains all the vowels a, e, i, o, u
let str = "Education".toLowerCase();

if (
    str.includes("a") &&
    str.includes("e") &&
    str.includes("i") &&
    str.includes("o") &&
    str.includes("u")
) {
    console.log("all vowels are present");
} else {
    console.log("Not all vowels are present")
}