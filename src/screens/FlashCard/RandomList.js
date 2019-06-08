import React from "react";
import FlashCardList from "../../components/views/FlashCard/FlashCardList";
import { getWords } from "../../helpers/Data/RandomList";

class RandomList extends React.Component {
  static navigationOptions = {
    title: "Random 100 Words"
  };

  getItems() {
    return getWords(100);
  }

  render() {
    return <FlashCardList words={this.getItems()} shuffle={true} />;
  }
}

export default RandomList;
