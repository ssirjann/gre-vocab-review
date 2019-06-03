import React from "react";
import WordMeaning from "../../basic/WordMeaningCard";
import PropTypes from "prop-types";
import { ScrollView } from "react-native";
import TitleCard from "../../basic/TitleOnlyCard";
import { shuffle } from "../../../helpers/Shuffle";
import GestureRecognizer from "react-native-swipe-gestures";

class FlashCardList extends React.Component {
  constructor(props) {
    super(props);

    this.shuffledKeys;
    this.setWordKeysOrder();
    this.state = {
      currentIndex: 0,
      hidden: true
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
          {this.state.hidden
            ? this.renderWordHidden()
            : this.renderWordDetails()}
        </ScrollView>
      </GestureRecognizer>
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
        wordDetail={this.props.words[currentWord]}
        onPress={this.nextWord}
      />
    );
  }

  nextWord = () => {
    let index = ++this.state.currentIndex;

    if (this.state.currentIndex == this.shuffledKeys.length) {
      index = 0;
      this.setWordKeysOrder();
    }

    this.setState({ hidden: true, currentIndex: index });
  };

  previousWord = () => {
    let index = --this.state.currentIndex;

    if (this.state.currentIndex < 0) {
      index = 0;
    }

    this.setState({ hidden: true, currentIndex: index });
  };
}

FlashCardList.propTypes = {
  words: PropTypes.object.isRequired
};

FlashCardList.defaultProps = {
  shuffle: true
};

export default FlashCardList;
