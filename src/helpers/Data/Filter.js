import data from "../../constants/Words";

export function filteredData(
  searchTerm = "",
  { fullWord = false, startOnly = true, searchMeaning = false } = {}
) {
  if (!searchTerm) return data;
  searchTerm = searchTerm.toLowerCase().trim();

  var keys = Object.keys(data).filter(word => {
    let matchesConditions;

    if (fullWord) {
      matchesConditions = word == searchTerm;
    } else if (startOnly) {
      matchesConditions = word.startsWith(searchTerm);
    } else {
      matchesConditions = word.includes(searchTerm);
    }

    if (searchMeaning) {
      matchesConditions = searchTermIsInMeaning(searchTerm, word);
    }

    return matchesConditions;
  });

  var filteredWords = {};

  for (let i = 0; i < keys.length; i++) {
    word = keys[i];

    filteredWords[word] = data[word];
  }

  return filteredWords;
}

function searchTermIsInMeaning(searchTerm, word) {
  const meaning = data[word].meaning;
console.log(meaning)
  if (Array.isArray(meaning)) {
    return meaning.some(x => x.meaning.includes(searchTerm));
  }

  return meaning.meaning.includes(searchTerm);
}
