import data from "../../constants/Words";
import { shuffle } from "../Shuffle";

let keys = shuffle(Object.keys(data));
let size = keys.length;

export function getFullQuizQuestions() {
  let questions = {};
  for (let i = 0; i < size; i++) {
    const word = keys[i];
    questions[word] = getQuestionForWord(word);
  }

  return questions;
}

function getQuestionForWord(word) {
  let randomIndices = [];
  let options = [{ meaning: data[word].meaning, isCorrect: true }];
  while (randomIndices.length < 3) {
    let r = Math.floor(Math.random() * size);
    console.log(r);
    const currentWord = keys[r];

    if (randomIndices.includes(r) || currentWord === word) continue;

    randomIndices.push(r);
    options.push({ meaning: data[currentWord].meaning, isCorrect: false });
  }

  return {
    word: word,
    options: shuffle(options)
  };
}
