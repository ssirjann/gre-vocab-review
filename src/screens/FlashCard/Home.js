import React from "react";
import { View } from "react-native";
import CategoryCard from "../../components/basic/TitleOnlyCard";

class Home extends React.Component {
  static navigationOptions = {
    title: "GRE Vocabulary Review"
  };

  render() {
    return (
      <View>
        <CategoryCard
          onPress={() => this.props.navigation.navigate("MagooshCategory")}
          title="Magoosh Default"
        />
        <CategoryCard
          onPress={() => this.props.navigation.navigate("AlphabeticCategory")}
          title="Alphabetic"
        />
        <CategoryCard
          onPress={() => this.props.navigation.navigate("RandomWordsFlashCard")}
          title="Random 100 words"
        />
        <CategoryCard
          onPress={() => this.props.navigation.navigate("AllWordsFlashCard")}
          title="All Words"
        />
      </View>
    );
  }
}

export default Home;
