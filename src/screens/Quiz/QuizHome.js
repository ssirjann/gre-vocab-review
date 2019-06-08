import React from "react";
import { Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CategoryCard from "../../components/basic/TitleOnlyCard";
import { Divider, Card, Text } from "react-native-elements";

class QuizHome extends React.Component {
  static navigationOptions = {
    title: "Quiz"
  };

  render() {
    return (
      <ScrollView>
        <CategoryCard
          large={true}
          onPress={() => this.props.navigation.navigate("FullQuiz")}
          title="Start Quiz"
        />
        <Divider />
      </ScrollView>
    );
  }
}

export default QuizHome;
