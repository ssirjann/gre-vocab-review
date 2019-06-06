import React from "react";
import PropTypes from "prop-types";
import { ScrollView, Text } from "react-native";
import { shuffle } from "../../../helpers/Shuffle";
import GestureRecognizer from "react-native-swipe-gestures";
import FlashCard from "./FlashCard";

class FlashCardList extends React.Component {
  constructor(props) {
    super(props);

    this.shuffledKeys;
    this.setWordKeysOrder();
    this.state = {
      currentIndex: 0
    };
  }

  setWordKeysOrder() {
    let keys = Object.keys(this.props.words);

    if (this.props.shuffle) {
      keys = shuffle(keys);
    }

    this.shuffledKeys = keys;
  }

  render() {
    return (
      <GestureRecognizer
        onSwipeRight={this.previousWord}
        onSwipeLeft={this.nextWord}
      >
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
          <FlashCard
            word={this.getCurrentWord()}
            wordDetail={this.getCurrentWordDetail()}
            onPressAfterEnd={this.nextWord}
          />
          <Text style={{ marginTop: 10, marginRight: 20, textAlign: "right" }}>
            <Text style={{ fontWeight: "bold" }}>
              {this.state.currentIndex + 1}
            </Text>{" "}
            of {Object.keys(this.props.words).length}
          </Text>
        </ScrollView>
      </GestureRecognizer>
    );
  }

  getCurrentWord() {
    return this.shuffledKeys[this.state.currentIndex];
  }

  getCurrentWordDetail() {
    const currentWord = this.shuffledKeys[this.state.currentIndex];

    return this.props.words[currentWord];
  }

  nextWord = () => {
    let index = ++this.state.currentIndex;

    if (this.state.currentIndex == this.shuffledKeys.length) {
      index = 0;
      this.setWordKeysOrder();
    }

    this.setState({ currentIndex: index });
  };

  previousWord = () => {
    let index = --this.state.currentIndex;

    if (this.state.currentIndex < 0) {
      index = 0;
    }

    this.setState({ currentIndex: index });
  };
}

FlashCardList.propTypes = {
  words: PropTypes.object.isRequired
};

FlashCardList.defaultProps = {
  shuffle: true
};

export default FlashCardList;
