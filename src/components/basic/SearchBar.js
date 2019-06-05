import React from "react";
import { SearchBar } from "react-native-elements";

const styles = {
  whiteBackground: { backgroundColor: "#fff" },
  blackText: { color: "#000" }
};

class ApplicationSearchBar extends React.Component {
  render() {
    const { value, onTextChange, isLoading = false } = this.props;

    return (
      <SearchBar
        placeholder="Search ..."
        inputContainerStyle={styles.whiteBackground}
        leftIconContainerStyle={styles.whiteBackground}
        rightIconContainerStyle={styles.whiteBackground}
        containerStyle={styles.whiteBackground}
        inputStyle={{ ...styles.whiteBackground, ...styles.blackText }}
        onChangeText={onTextChange}
        value={value}
        showLoading={isLoading}
        //  autoCorrect={false}
      />
    );
  }
}

export default ApplicationSearchBar;
