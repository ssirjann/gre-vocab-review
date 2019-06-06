import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { Icon } from "react-native-elements";

export default class drawerContentComponents extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <ImageBackground
            source={require("../../assets/splash.png")}
            style={{ flex: 1, width: 280, justifyContent: "center" }}
          >
            <Text style={styles.headerText}>Vocabulary Review</Text>
          </ImageBackground>
        </View>
        <View style={styles.screenContainer}>
          <View
            style={[
              styles.screenStyle,
              this.props.activeItemKey == "FlashCards"
                ? styles.activeBackgroundColor
                : null
            ]}
          >
            <Icon
              name="cards-playing-outline"
              type="material-community"
              iconStyle={[
                styles.iconStyle,
                this.props.activeItemKey == "FlashCards"
                  ? styles.selectedTextStyle
                  : null
              ]}
            />
            <Text
              style={[
                styles.screenTextStyle,
                this.props.activeItemKey == "FlashCards"
                  ? styles.selectedTextStyle
                  : null
              ]}
              onPress={this.navigateToScreen("FlashCards")}
            >
              Flash Cards
            </Text>
          </View>
          <View
            style={[
              styles.screenStyle,
              this.props.activeItemKey == "Dictionary"
                ? styles.activeBackgroundColor
                : null
            ]}
          >
            <Icon
              name="md-book"
              type="ionicon"
              iconStyle={[
                styles.iconStyle,
                this.props.activeItemKey == "Dictionary"
                  ? styles.selectedTextStyle
                  : null
              ]}
            />
            <Text
              style={[
                styles.screenTextStyle,
                this.props.activeItemKey == "Dictionary"
                  ? styles.selectedTextStyle
                  : null
              ]}
              onPress={this.navigateToScreen("Dictionary")}
            >
              Dictionary
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  headerContainer: {
    height: 150
  },
  headerText: {
    color: "#fff8f8"
  },
  screenContainer: {
    paddingTop: 20,
    width: "100%"
  },
  screenStyle: {
    height: 50,
    marginTop: 2,
    flexDirection: "row",
    alignItems: "center",
    width: "100%"
  },
  screenTextStyle: {
    fontSize: 20,
    marginLeft: 20,
    textAlign: "center"
  },
  selectedTextStyle: {
    fontWeight: "bold",
    color: "#fff"
  },
  activeBackgroundColor: {
    backgroundColor: "#5388d0"
  },
  iconStyle: {
      marginLeft: 15
  }
});
