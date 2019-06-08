import React from "react";
import { getWordsForCategory } from "../../helpers/Data/MagooshList";
import FlashCardList from "../../components/views/FlashCard/FlashCardList";

class MagooshList extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("category", "Magoosh List")
    };
  };
 
  getItems() {
    let category = this.props.navigation.getParam("category");

    return getWordsForCategory(category);
  }

  render() {
    return <FlashCardList words={this.getItems()} shuffle={true} />;
  }
}

export default MagooshList;
