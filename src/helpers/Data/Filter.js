import data from "../../constants/Words";

export function filteredData(searchTerm = "") {
  if (!searchTerm) return data;

  searchTerm = searchTerm.toLowerCase().trim();

  var keys = Object.keys(data).filter(word => {
    return word.startsWith(searchTerm);
  });

  var filteredWords = {};

  for (let i = 0; i < keys.length; i++) {
    word = keys[i];

    filteredWords[word] = data[word];
  }

  return filteredWords;
}
