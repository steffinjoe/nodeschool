function countWords(inputWords) {
    return inputWords.reduce((countMap,word) => {
        countMap[word] = ++countMap[word] || 1
        return countMap
    }, {}) // second argument to reduce initialises countMap to {}
  }
  
  module.exports = countWords