
function reverseWord(word) {
    return word.split('').reverse().join('');
  }
  

  function reverseSentence(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.map(reverseWord);
    return reversedWords.join(' ');
  }
  
  const inputSentence = "Example - This is a sunny day";
  const reversedSentence = reverseSentence(inputSentence);
  console.log(reversedSentence);
  