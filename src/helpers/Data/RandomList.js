import data from "../../constants/Words";
import { shuffle } from "../Shuffle";

export function getWords(noOfWords = 100) {
  let keys = shuffle(Object.keys(data));
  let size = keys.length;

  noOfWords = noOfWords <= size ? noOfWords : size;

  let words = {};

  keys.splice(0, noOfWords).map(word => (words[word] = data[word]));

  return words;
}
