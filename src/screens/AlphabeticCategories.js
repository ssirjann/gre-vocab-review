import React from "react";
import { ScrollView } from "react-native";
import CategoryCard from "../components/basic/TitleOnlyCard";
import { getCategories } from "../helpers/Data/AlphabeticCategory";

class AlphabeticCategories extends React.Component {
  static navigationOptions = {
    title: "Alphabetic"
  };

  render() {
    return (
      <ScrollView>
        {getCategories().map((item, index) => (
          <CategoryCard
            onPress={() =>
              this.props.navigation.navigate("Alphabetic", { category: item })
            }
            key={index}
            title={`${item.start} - ${item.end}`}
          />
        ))}
      </ScrollView>
    );
  }
}

export default AlphabeticCategories;
