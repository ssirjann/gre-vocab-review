import React from "react";
import { ScrollView, Animated } from "react-native";
import TitleCard from "../components/home/TitleOnlyCard";
import { shuffle } from "../helpers/RandomGenerator";
import { getWordsForCategory } from "../helpers/Data/MagooshList";
import WordMeaning from "../components/home/WordMeaningCard";

class MagooshList extends React.Component {
  static navigationOptions = {
    title: "Magoosh Category"
  };

  constructor(props) {
    super(props);

    this.words = {};
    this.shuffledKeys = [];

    this.state = {
      currentIndex: 0,
      hidden: true
    };
  }

  componentDidMount() {
    this.getItems();
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "red"
          }
        }}
      >
        {this.state.hidden ? this.renderWordHidden() : this.renderWordDetails()}
      </ScrollView>
    );
  }

  renderWordHidden() {
    const currentWord = this.shuffledKeys[this.state.currentIndex];

    return <TitleCard title={currentWord} onPress={this.showWordDetails} />;
  }

  showWordDetails = () => {
    this.setState({ hidden: false });
  };

  renderWordDetails() {
    const currentWord = this.shuffledKeys[this.state.currentIndex];

    return (
      <WordMeaning
        word={currentWord}
        wordDetail={this.words[currentWord]}
        onPress={this.nextWord}
      />
    );
  }

  nextWord = () => {
    let index = ++this.state.currentIndex;
    if (this.state.currentIndex == this.shuffledKeys.length - 1) {
      index = 0;
      this.shuffledKeys = shuffle(this.shuffledKeys);
    }

    this.setState({ hidden: true, currentIndex: index });
  };

  cardPress = () => {};

  getItems() {
    var category = this.props.navigation.getParam("category");
    var items = getWordsForCategory(category);
    this.words = items;
    this.shuffledKeys = shuffle(Object.keys(items));

    this.setState({ currentIndex: ++this.state.currentIndex });
  }
}

export default MagooshList;
