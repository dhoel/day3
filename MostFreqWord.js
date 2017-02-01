function mostFrequentWord(words) {
  var wordNumbers = {};
  for (var i = 0; i <= words.length; i++) {
      if (words[i] in wordNumbers) {
        wordNumbers[words[i]]++;
      } else {
        wordNumbers[words[i]] = 1;
      }
    }
    var currentMaxKey = Object.keys(wordNumbers)[0];
    var currentMaxCount = wordNumbers[currentMaxKey];

  for (var key in wordNumbers) {
    if (wordNumbers[key] > currentMaxCount) {
      currentMaxCount = wordNumbers[key];
      currentMaxKey = key;

    }

  }
  return currentMaxKey;

}
