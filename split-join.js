const lyrics =
  "Tumi bondhu kala pakhi. ami jeno ki bosonto kale tomay bolte pari ni. sada sada kala kala. rong jomeche sada kala";

const parts = lyrics.split(" ");
// console.log(parts[3]);
const sentense = lyrics.split(".");
const char = lyrics.split("");
// console.log(parts);

const partial1 = lyrics.slice(5, 8);
// console.log(partial1);

const partial2 = lyrics.substring(5, 8);
// console.log(partial2);

const newSong = [
  "Tumi bondhu kala pakhi",
  "ami jeno ki bosonto kale tomay bolte pari ni",
  "sada sada kala kala",
  "rong jomeche sada kala",
];

const songIs = newSong.join(". ");
console.log(songIs);
