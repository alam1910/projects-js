// Looping technique
// 1. for Looping
// 2. while Looping
// 3. do while ---> ignore
// 4. for of --> array loop lorar jonno
// 5. for in --> object loop korar jonno

const friends = ['elon', 'bill', 'mark', 'waren'];
for(const friend of friends){
    // console.log(friend);
}

for (let i = 0; i < friends.length; i++) {
    // console.log(i);
    // console.log(friends[i])
}

const numbers = [34,343,4,34,3,657,6,87,87,89,89];

for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
}

let i = 0;
while ( i < friends.length){
    console.log(friends[i]);
    i++;
}

let n = 0;
while (n < numbers.length){
    console.log(numbers[n]);
    n++;
}