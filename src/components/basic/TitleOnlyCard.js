import React from "react";
import { Text, TouchableNativeFeedback, View } from "react-native";
import { Card } from "react-native-elements";

const styles = {
  wrapperStyle: {
    paddingTop: 25,
    paddingBottom: 25,
    alignContent: "center"
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000"
  }
};

const CategoryCard = ({ title, onPress }) => (
  <TouchableNativeFeedback onPress={onPress}>
      <Card wrapperStyle={styles.wrapperStyle}>
        <Text style={styles.text}>{title}</Text>
      </Card>
  </TouchableNativeFeedback>
);

export default CategoryCard;
