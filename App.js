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
import Dictionary from "./src/screens/Dictionary/Index";
import Drawer from "./src/navigation/Drawer";
import DrawerIcon from "./src/navigation/DrawerIcon";

const NavigationOptions = {
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
};

const FlashCardsStackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: DrawerIcon
    },

    MagooshCategory: MagooshCategories,
    MagooshFlashCards: MagooshList,

    AlphabeticCategory: AlphabeticCategories,
    AlphabeticFlashCards: AlphabeticList,

    RandomWordsFlashCard: RandomList,
    AllWordsFlashCard: AllList
  },
  NavigationOptions
);

const DictionaryStackNavigator = createStackNavigator(
  {
    Home: { screen: Dictionary, navigationOptions: DrawerIcon }
  },
  NavigationOptions
);

const DrawerNavigator = createDrawerNavigator(
  {
    FlashCards: FlashCardsStackNavigator,
    Dictionary: DictionaryStackNavigator
  },
  { contentComponent: Drawer }
);

const AppContainer = createAppContainer(DrawerNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
