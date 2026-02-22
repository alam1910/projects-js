const friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];

console.log(friends.includes('gelam'))
console.log(friends.includes('pailam'))
console.log(friends.includes('kahilam'))

if(friends.includes('Salam')){
    console.log('party')
}
else{
    console.log('no food, we are fasting')
}