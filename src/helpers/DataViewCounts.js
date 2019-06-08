import AsyncStorage from "@react-native-community/async-storage";

export const handleWordDetailView = async word => {
  try {
    let timesViewed = await AsyncStorage.getItem(word);
    timesViewed = timesViewed ? ++timesViewed : 1;
    AsyncStorage.setItem(word, timesViewed);
  } catch (e) {}
};

export const getWordsDetailViewedCount = async word => {
  let count = await AsyncStorage.getItem(word);
  return count || 0;
};
