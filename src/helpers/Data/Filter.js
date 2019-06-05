import data from "../../constants/Words";
import Fuse from "fuse.js";

let searchableArray = getFuseSearchableArray();
let searchOptions = {
  keys: ["word", "meaning.meaning"],
  minMatchCharLength: 4,
  threshold: 0.4,
  maxPatternLength: 15,
  shouldSort: true
};

let fuse = new Fuse(searchableArray, searchOptions);

export function filteredData(searchTerm = "") {
  if (!searchTerm) return data;
  searchTerm = searchTerm.toLowerCase().trim();

  let result = fuse.search(searchTerm);
  var filteredWords = {};

  for (let i = 0; i < result.length; i++) {
    word = result[i].word;

    filteredWords[word] = data[word];
  }

  return filteredWords;
}

function getFuseSearchableArray() {
  return Object.keys(data).map(word => {
    let meaning;
    let wordDetail = data[word];
    if (Array.isArray(wordDetail.meaning)) {
      meaning = wordDetail.meaning;
    } else {
      meaning = [wordDetail.meaning];
    }

    return { word: word, meaning: meaning };
  });
}
