const lyrics = "Tumi bondhu kala Pakhi ami jeno ki bosonto kale tomay bolte pari ni sada sada kala kala rong jomeche sada kala";

const searchString = "PaKhi";

// search .includes()

// const doesExist = lyrics.includes("pakhi");
// const doesExist = lyrics.includes("Pakhi");
// const doesExist = lyrics.includes(searchString);

// .toLowerCase(), .toUpperCase()

const lyricLowerCase = lyrics.toLowerCase();
// console.log(lyricLowerCase);
const searchStringLowerCase = searchString.toLowerCase();
const doesExist = lyricLowerCase.includes(searchStringLowerCase);

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());

// console.log(doesExist);
// console.log(doesExistOneLine);

// ----------------------------------
// .indexOf
console.log(lyrics.indexOf('pakhi'));
console.log(lyrics.indexOf('sada'));

if (lyrics.indexOf('Pakhi') !== -1){
    console.log('Exist inside the string');
}
else {
    console.log('Cannot find it');
}

// startWith
console.log(lyrics.startsWith('tumi'));

// endswith

const fileName = "paper.pdf";
const otherFile = "myPhoto.png";

// fileName.endsWith('.pdf');
console.log(fileName.endsWith('.pdf'));