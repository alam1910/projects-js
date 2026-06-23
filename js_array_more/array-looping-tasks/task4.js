// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

const statement = 'I am a hard working person';

const words = statement.split(' ');
const reversedWords = [];

for (let i = words.length -1; i >= 0; i--) {
    reversedWords.push(words[i]);
}

const result = reversedWords.join(' ');

console.log(result);