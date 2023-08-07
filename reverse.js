// Easyest Method String reverse
function reverseString(str) {
  return str.split("").reverse().join("");
}

const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
// console.log("Original string:", originalString);
// console.log("Reversed string:", reversedString);

// for loop method String reverse
function reverseString1(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  const originalString1 = "Hello, World!";
  const reversedString1 = reverseString1(originalString1);
//   console.log("Original string:", originalString1);
//   console.log("Reversed string:", reversedString1);
  

// Easyest Method Word reverse
function reverseWords(sentence) {
    return sentence.split(" ").reverse().join(" ");
  }
  
  const originalSentence = "This is a sample sentence.";
  const reversedSentence = reverseWords(originalSentence);
//   console.log("Original sentence:", originalSentence);
//   console.log("Reversed sentence:", reversedSentence);

// for loop method word reverse

function reverseWords1(sentence) {
    const words = sentence.split(" ");
    let reversedSentence = "";
    for (let i = words.length - 1; i >= 0; i--) {
      reversedSentence += words[i] + " ";
    }
    return reversedSentence.trim();
  }
  
  const originalSentence1 = "This is a sample sentence.";
  const reversedSentence1 = reverseWords1(originalSentence1);
  console.log("Original sentence:", originalSentence1);
  console.log("Reversed sentence:", reversedSentence1);
  