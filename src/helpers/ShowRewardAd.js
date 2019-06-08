import { AdMobRewarded } from "react-native-admob";
import { AdRewardedUnitId } from "../constants/Ad";

export async function showRewardAd() {
  AdMobRewarded.setAdUnitID(AdRewardedUnitId);
  await AdMobRewarded.requestAd();

}
