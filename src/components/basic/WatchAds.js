import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Icon } from "react-native-elements";
import { showRewardAd } from "../../helpers/ShowRewardAd";

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

    this.state = {
      loading: false
    };
  }

  showAd = async () => {
    this.setState({ loading: true });

    try {
      await showRewardAd();
    } catch {}

    this.props.onWatchedAds();
  };

  render() {
    return (
      <View>
        <Button
          onPress={this.showAd}
          loading={this.state.loading}
          icon={<Icon name="slideshow" color="white" />}
          title="Continue"
          containerStyle={styles.buttonContainerStyle}
        />
      </View>
    );
  }
}

export default WatchAds;
