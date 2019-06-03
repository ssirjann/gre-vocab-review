import data from "../../constants/Words";

export function getCategories(categorySize = 100) {
  const keys = Object.keys(data);
  const size = keys.length;
  const noOfCategories = Math.ceil(size / categorySize);

  let categoryDetails = [];

  for (let i = 0; i < noOfCategories; i++) {
    let wordStartIndex = i * categorySize;
    let wordEndIndex = (i + 1) * categorySize - 1;

    if (i == noOfCategories - 1) {
      wordIndexEnd = size - 1;
    }

    categoryDetails.push({
      size: categorySize,
      start: keys[wordStartIndex],
      end: keys[wordEndIndex],
      startIndex: wordStartIndex,
      endIndex: wordEndIndex
    });
  }
  console.log(categoryDetails);
  return categoryDetails;
}

export function getWordsForCategory(category) {
  let categoryWords = {};

  const keys = Object.keys(data);

  keys.map((word, index) => {
    if (index >= category.startIndex && index <= category.endIndex) {
      categoryWords[word] = data[word];
    }
  });

  console.log(categoryWords);

  return categoryWords;
}
