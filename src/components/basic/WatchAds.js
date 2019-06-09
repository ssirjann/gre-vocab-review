import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  buttonContainerStyle: {
    width: 200,
    alignSelf: "center",
    marginTop: 15
  }
});

class WatchAds extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  requestAd() {}

  componentWillUnmount() {}

  showAd = async () => {
    if (this.state.loading == false) {
    }
  };

  render() {
    return null;
  }
}

export default WatchAds;
