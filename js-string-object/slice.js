const address = 'BasherKellah';
const part = address.slice(2,5);
console.log(part);

const sentence = 'I am a very honest person and beloved by the only one most powerful';
console.log(sentence.split());
console.log(sentence.split(''));
console.log(sentence.split(' '));
console.log(sentence.split('a'));

const friendStr = 'Karim, Jabber, Kuddus, Haiyyu, Kahiyyum, Mannan, Aziz';
const friend = friendStr.split(',');
console.log(friend);
const realFriend = [ 'Karim', 'Jabber', 'Kuddus', 'Haiyyu', 'Kahiyyum', 'Mannan', 'Aziz' ];
console.log(realFriend.join());
console.log(realFriend.join(''));
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));
