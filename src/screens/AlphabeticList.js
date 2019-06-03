import React from "react";
import { getWordsForCategory } from "../helpers/Data/AlphabeticCategory";
import FlashCardList from "../components/views/FlashCard/FlashCardList";

class AlphabeticList extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const category = navigation.getParam("category");

    return {
      title: `${category.start} - ${category.end}`
    };
  };

  componentWillMount() {
    this.getItems();
  }

  getItems() {
    const category = this.props.navigation.getParam("category");

    return getWordsForCategory(category);
  }

  render() {
    return <FlashCardList words={this.getItems()} shuffle={true} />;
  }
}

export default AlphabeticList;
