import React from "react";
import { Text, TouchableNativeFeedback, View } from "react-native";
import { Card } from "react-native-elements";
import { handleWordDetailView } from "../../helpers/DataViewCounts";

const styles = {
  title: {
    fontSize: 30
  },
  type: {
    fontWeight: "bold"
  },
  meaning: {
    fontWeight: "normal",
    color: "#44f",
    fontSize: 20
  },
  sentence: {
    marginTop: 10,
    fontStyle: "italic"
  },
  meaningWrapper: {
    marginTop: 20
  }
};

const WordMeaning = ({ word, wordDetail, onPress }) => (
  <TouchableNativeFeedback
    onPress={() => {
      handleWordDetailView(word);
      onPress();
    }}
  >
    <Card title={word} titleStyle={styles.title}>
      {<Meaning meaning={wordDetail.meaning} />}
    </Card>
  </TouchableNativeFeedback>
);

const Meaning = ({ meaning }) => {
  if (Array.isArray(meaning)) {
    return meaning.map((m, i) => <MeaningBase wordDetail={m} key={i} />);
  }

  return <MeaningBase wordDetail={meaning} />;
};

const MeaningBase = ({ wordDetail }) => (
  <React.Fragment>
    <Text style={styles.meaningWrapper}>
      <Text style={styles.type}>{wordDetail.type}: </Text>
      <Text style={styles.meaning}>{wordDetail.meaning}</Text>
    </Text>
    <Text style={styles.sentence}>{wordDetail.sentence}</Text>
  </React.Fragment>
);

export default WordMeaning;
