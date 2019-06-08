import React from "react";
import PropTypes from "prop-types";
import { ScrollView, Text, Alert } from "react-native";
import { shuffle } from "../../../helpers/Shuffle";
import Question from "./Question";

class QuizList extends React.Component {
  constructor(props) {
    super(props);

    this.shuffledKeys;
    this.setWordKeysOrder();
    this.state = {
      currentIndex: 0
    };
  }

  setWordKeysOrder() {
    let keys = Object.keys(this.props.questions);

    if (this.props.shuffle) {
      keys = shuffle(keys);
    }

    this.shuffledKeys = keys;
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
        <Question
          word={this.getCurrentWord()}
          options={this.getCurrentWordOptions()}
          onCorrectOptionSelected={this.nextQuestion}
          onWrongOptionSelected={this.handleWrongOptionSelected}
        />
        <Text style={{ marginTop: 10, marginRight: 20, textAlign: "right" }}>
          Score:
          <Text style={{ fontWeight: "bold" }}>{this.state.currentIndex}</Text>
        </Text>
      </ScrollView>
    );
  }

  getCurrentWord() {
    return this.shuffledKeys[this.state.currentIndex];
  }

  getCurrentWordOptions() {
    const currentWord = this.shuffledKeys[this.state.currentIndex];
    return this.props.questions[currentWord].options;
  }

  nextQuestion = () => {
    let index = ++this.state.currentIndex;

    if (this.state.currentIndex == this.shuffledKeys.length) {
      index = 0;
      this.setWordKeysOrder();
    }

    this.setState({ currentIndex: index });
  };

  handleWrongOptionSelected = () => {
    Alert.alert("This is wrong");
  };
}

QuizList.propTypes = {
  questions: PropTypes.object.isRequired
};

QuizList.defaultProps = {
  shuffle: true
};

export default QuizList;
