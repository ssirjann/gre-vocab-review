import React from "react";
import { View } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import Home from "./src/screens/FlashCard/Home";
import MagooshCategories from "./src/screens/FlashCard/MagooshCategories";
import MagooshList from "./src/screens/FlashCard/MagooshList";
import AlphabeticCategories from "./src/screens/FlashCard/AlphabeticCategories";
import AlphabeticList from "./src/screens/FlashCard/AlphabeticList";
import RandomList from "./src/screens/FlashCard/RandomList";
import AllList from "./src/screens/FlashCard/AllList";

const AppNavigator = createStackNavigator(
  {
    Home: Home,

    MagooshCategory: MagooshCategories,
    MagooshFlashCards: MagooshList,

    AlphabeticCategory: AlphabeticCategories,
    AlphabeticFlashCards: AlphabeticList,

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

const DrawerNavigator = createDrawerNavigator({
  "Flash Cards": AppNavigator,
  // Dictionary: AllWordsList
});

const AppContainer = createAppContainer(DrawerNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
