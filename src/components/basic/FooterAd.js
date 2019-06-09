import React from "react";
import AdMobBanner from "react-native-admob/RNAdMobBanner";
import { FooterAdUnitId } from "../../constants/Ad";

const FooterAd = () => (
  <AdMobBanner adSize="smartBanner" adUnitID={FooterAdUnitId} />
);

export default FooterAd;
