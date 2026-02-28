function vowelCounter(text) {
  // Retrieve all vowel occurrences; returns null if no match found
  let vowelCount = text.match(/[aeiou]/gi);
  if (vowelCount) {
    return vowelCount.length;
  }
  return 0;
}

let final = vowelCounter("HELLO, Welcome to code");
console.log(`Number of vowels are: ${final}`);
