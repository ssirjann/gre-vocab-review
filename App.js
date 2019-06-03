import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./src/screens/Home";
import MagooshCategories from "./src/screens/MagooshCategories";
import MagooshList from "./src/screens/MagooshList";
import AlphabeticCategories from "./src/screens/AlphabeticCategories";
import AlphabeticList from "./src/screens/AlphabeticList";
import RandomList from "./src/screens/RandomList";
import AllList from "./src/screens/AllList";

const AppNavigator = createStackNavigator(
  {
    Home: Home,

    MagooshCategory: MagooshCategories,
    Magoosh: MagooshList,

    AlphabeticCategory: AlphabeticCategories,
    Alphabetic: AlphabeticList,

    RandomWordsFlashCard: RandomList,
    AllWordsFlashCard: AllList
  },
  {
    initialRouteName: "Home",
    headerLayoutPreset: "center",
    headerMode: "float",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#5388d0"
      },
      headerTitleStyle: {
        letterSpacing: 2,
        fontWeight: "normal"
      },
      headerRight: <View />,
      headerTintColor: "#ffffff"
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
