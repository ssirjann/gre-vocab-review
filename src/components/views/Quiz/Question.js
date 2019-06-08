import React from "react";
import { TouchableNativeFeedback, Text, View, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import { getWordsDetailViewedCount } from "../../../helpers/DataViewCounts";

const styles = StyleSheet.create({
  option: { padding: 20, borderColor: "#ccc", borderWidth: 1 },
  wrongOption: {
    backgroundColor: "#f44336",
    color: "#fff"
  },
  correctOption: {
    backgroundColor: "#4caf50",
    color: "#fff"
  }
});

class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null,
      seenCount: 0
    };
  }

  async componentDidMount() {
    this.setState({
      seenCount: await getWordsDetailViewedCount(this.props.word)
    });
  }

  render() {
    return (
      <Card
        dividerStyle={{ display: "none" }}
        title={this.props.word}
        containerStyle={{ padding: 5, margin: 5 }}
        titleStyle={{ fontSize: 25 }}
      >
        {this.renderOptions()}
      </Card>
    );
  }

  renderOptions() {
    return (
      <View>
        {this.props.options.map((option, index) => (
          <TouchableNativeFeedback
            key={index}
            onPress={() => this.handleSelection(option)}
            disabled={Boolean(this.state.selected)}
          >
            <View style={this.getOptionStyles(option)}>
              <Option option={option} />
            </View>
          </TouchableNativeFeedback>
        ))}
        <Text style={{ textAlign: "right", marginRight: 20, marginTop: 10 }}>
          You have studied this word{" "}
          <Text style={{ fontWeight: "bold" }}>
            {this.state.seenCount}{" "}
            {this.state.seenCount === 1 ? "time" : "times"}
          </Text>
        </Text>
      </View>
    );
  }

  getOptionStyles = option => {
    if (!this.state.selected) return styles.option;

    if (option.isCorrect) return [styles.option, styles.correctOption];

    if (this.state.selected === option)
      return [styles.option, styles.wrongOption];

    return styles.option;
  };

  handleSelection = option => {
    this.setState({ selected: option });

    const action = () => {
      if (option.isCorrect) {
        this.setState({ selected: null });
        this.props.onCorrectOptionSelected();
        return;
      }

      this.props.onWrongOptionSelected();
    };

    setTimeout(action, 1500);
  };
}

const Option = ({ option }) => {
  if (Array.isArray(option.meaning)) {
    return option.meaning.map((meaning, i) => (
      <Text key={i}>- {meaning.meaning}</Text>
    ));
  }

  return <Text>- {option.meaning.meaning}</Text>;
};

export default Question;
