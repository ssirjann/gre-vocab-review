import data from "../../constants/Words";

export function getWordsForCategory(category) {
  var keys = Object.keys(data);
  var filteredData = {};
  for (var i = 0; i < keys.length; i++) {
    var word = keys[i];

    if (data[word].category === category) {
      filteredData[word] = data[word];
    }
  }

  return filteredData;
}
