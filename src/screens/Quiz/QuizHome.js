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
          onPress={() => Alert.alert("Your Quiz begins now")}
          title="Start Quiz"
        />
        <Divider />
        <CategoryCard
          large={false}
          onPress={() => Alert.alert("This is you scores")}
          title="My Scores"
        />
        <Text
          style={{
            marginTop: 70,
            color: "#4caf50",
            fontSize: 20,
            textAlign: "right",
            marginRight: 20
          }}
        >
          High Score: <Text style={{ fontWeight: "bold" }}>123</Text>
        </Text>
      </ScrollView>
    );
  }
}

export default QuizHome;
