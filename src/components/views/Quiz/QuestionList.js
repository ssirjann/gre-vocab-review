import React from "react";
import PropTypes from "prop-types";
import { ScrollView, Text, View } from "react-native";
import { shuffle } from "../../../helpers/Shuffle";
import Question from "./Question";
import { Button, Icon } from "react-native-elements";
import WatchAds from "../../basic/WatchAds";

class QuizList extends React.Component {
  constructor(props) {
    super(props);

    this.shuffledKeys;
    this.setWordKeysOrder();
    this.state = {
      currentIndex: 0,
      wrongSelectedCount: 0,
      playing: true
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
        {this.renderRetryButtons()}
      </ScrollView>
    );
  }

  renderRetryButtons() {
    const retryButton = (
      <Button
        onPress={this.restartQuiz}
        title="Restart"
        containerStyle={{
          width: 200,
          alignSelf: "center",
          marginTop: 15
        }}
      />
    );

    if (this.state.wrongSelectedCount === 1 && !this.state.playing) {
      return (
        <View>
          <WatchAds onWatchedAds={this.skipWord} />
          {retryButton}
        </View>
      );
    }

    if (!this.state.playing) {
      return retryButton;
    }

    return null;
  }

  skipWord = () => {
    this.setState({ playing: true });
    this.nextQuestion();
  };

  restartQuiz = () => {
    this.setWordKeysOrder();
    this.setState({
      currentIndex: 0,
      wrongSelectedCount: 0,
      playing: true
    });
  };

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
    this.setState({
      wrongSelectedCount: ++this.state.wrongSelectedCount,
      playing: false
    });
  };
}

QuizList.propTypes = {
  questions: PropTypes.object.isRequired
};

QuizList.defaultProps = {
  shuffle: true
};

export default QuizList;
