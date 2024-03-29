import React from "react";
import { View, Text } from "react-native";
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
import Dictionary from "./src/screens/Dictionary/List";
import Drawer from "./src/navigation/Drawer";
import DrawerIcon from "./src/navigation/DrawerIcon";
import QuizHome from "./src/screens/Quiz/QuizHome";
import FullQuiz from "./src/screens/Quiz/FullQuiz";
import SplashScreen from "react-native-splash-screen";
import FooterAd from "./src/components/basic/FooterAd";

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

const QuizStackNavigator = createStackNavigator(
  {
    Home: { screen: QuizHome, navigationOptions: DrawerIcon },
    FullQuiz: FullQuiz
  },
  NavigationOptions
);

QuizStackNavigator.navigationOptions = ({ navigation }) => {
  let drawerLockMode = "unlocked";

  if (navigation.state.routes.find(route => route.routeName === "FullQuiz")) {
    drawerLockMode = "locked-closed";
  }

  return {
    drawerLockMode
  };
};

const DrawerNavigator = createDrawerNavigator(
  {
    FlashCards: FlashCardsStackNavigator,
    Dictionary: DictionaryStackNavigator,
    Quiz: QuizStackNavigator
  },
  { contentComponent: Drawer }
);

const AppContainer = createAppContainer(DrawerNavigator);

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <React.Fragment>
        <View style={{ flex: 1 }}>
          <AppContainer />
        </View>
        <FooterAd />
      </React.Fragment>
    );
  }
}
