import React from "react";
import { ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
import CategoryCard from "../components/basic/TitleOnlyCard";
import CategoryList from "../constants/MagooshCategories";

class MagooshCategories extends React.Component {
  static navigationOptions = {
    title: "Magoosh Category"
  };

  render() {
    return (
      <ScrollView>
        {CategoryList.map((item, index) => (
          <CategoryCard
            onPress={() =>
              this.props.navigation.navigate("Magoosh", { category: item })
            }
            key={index}
            title={item}
          />
        ))}
      </ScrollView>
    );
  }
  renderItem = ({ item }) => (
    <ListItem Component={CategoryCard}>
      {console.log(item)}
      {item}
    </ListItem>
  );
}

export default MagooshCategories;
