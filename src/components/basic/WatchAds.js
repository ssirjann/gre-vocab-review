import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Icon } from "react-native-elements";
import { AdMobRewarded } from "react-native-admob";
import { AdRewardedUnitId } from "../../constants/Ad";

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
      loading: true,
      error: false
    };
  }

  componentDidMount() {
    AdMobRewarded.setAdUnitID(AdRewardedUnitId);
    this.requestAd();
    AdMobRewarded.addEventListener("rewarded", reward =>
      this.props.onWatchedAds()
    );
    AdMobRewarded.addEventListener("adLoaded", error =>
      this.setState({ loading: false })
    );
    AdMobRewarded.addEventListener("adFailedToLoad", error =>
      this.setState({ loading: false, error: true })
    );
    AdMobRewarded.addEventListener("adClosed", () => {
      this.requestAd();
    });
  }

  requestAd() {
    this.setState({ loading: true, error: false });
    AdMobRewarded.requestAd().catch(err => {
      if (err.toString().endsWith("Ad is already loaded.")) {
        this.setState({ loading: false });
      } else {
        this.setState({ error: true });
      }
    });
  }

  componentWillUnmount() {
    AdMobRewarded.removeAllListeners();
  }

  showAd = async () => {
    if (this.state.loading == false) {
      AdMobRewarded.showAd();
    }
  };

  render() {
    return (
      <View>
        <Button
          onPress={this.showAd}
          loading={this.state.loading}
          disabled={this.state.error}
          icon={<Icon name="slideshow" color="white" />}
          title={this.state.error ? "No Current Offers" : "Continue"}
          containerStyle={styles.buttonContainerStyle}
        />
      </View>
    );
  }
}

export default WatchAds;
