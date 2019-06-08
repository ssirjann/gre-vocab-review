import React from "react";
import FlashCardList from "../../components/views/FlashCard/FlashCardList";
import data from "../../constants/Words";

class AllList extends React.Component {
  static navigationOptions = {
    title: "All Words"
  };

  getItems() {
    return data;
  }

  render() {
    return <FlashCardList words={this.getItems()} shuffle={true} />;
  }
}

export default AllList;
