import React from "react";
import { TouchableNativeFeedback, Text, View, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import { getWordsDetailViewedCount } from "../../../helpers/DataViewCounts";

const styles = StyleSheet.create({
  option: { padding: 20, borderColor: "#ccc", borderWidth: 1 },
  wrongOption: {
    backgroundColor: "#f44336"
  },
  correctOption: {
    backgroundColor: "#4caf50"
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
      <View style={{ padding: 5, margin: 5 }}>
        <Text
          style={[
            {
              fontSize: 25,
              textAlign: "center",
              fontWeight: "bold",
              letterSpacing: 1,
              color: "#000"
            },
            styles.option
          ]}
        >
          {this.props.word}
        </Text>
        {this.renderOptions()}
      </View>
    );
  }

  async componentWillUpdate(nextProps) {
    if (nextProps.word !== this.props.word) {
      this.setState({ selected: null });
      this.forceUpdate();
      this.setState({
        seenCount: await getWordsDetailViewedCount(this.props.word)
      });
    }
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
        <Text style={{ textAlign: "right", marginRight: 10, marginTop: 20 }}>
          You have studied this word{" "}
          <Text style={{ fontWeight: "bold" }}>
            {this.state.seenCount}{" "}
            {this.state.seenCount == 1 ? "time" : "times"}
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
      <OptionText text={meaning.meaning} key={i} />
    ));
  }

  return <OptionText text={option.meaning.meaning} />;
};

const OptionText = ({ text }) => (
  <View style={{ flexDirection: "row" }}>
    <Text>{"\u2022"}</Text>
    <Text style={{ flex: 1, paddingLeft: 5 }}>{text}</Text>
  </View>
);

export default Question;
