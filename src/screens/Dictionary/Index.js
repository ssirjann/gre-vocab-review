import React from "react";
import data from "../../constants/Words";
import { FlatList, View } from "react-native";
import FlashCard from "../../components/views/FlashCard/FlashCard";
import ApplicationSearchBar from "../../components/basic/SearchBar";
import { filteredData } from "../../helpers/Data/Filter";
import { CheckBox, Divider } from "react-native-elements";

class AllWordList extends React.Component {
  static navigationOptions = {
    title: "Dictionary"
  };

  constructor(props) {
    super(props);

    this.state = {
      data: data,
      searchText: "",
      fullWord: false,
      startOnly: true,
      searchMeaning: false
    };
  }

  keyExtractor = (_, index) => index.toString();

  render() {
    return (
      <React.Fragment>
        {this.renderHeader()}
        <Divider />
        <FlatList
          keyExtractor={this.keyExtractor}
          data={Object.keys(this.state.data)}
          renderItem={this.renderItem}
        />
      </React.Fragment>
    );
  }

  renderHeader = () => {
    return (
      <React.Fragment>
        <ApplicationSearchBar
          onTextChange={this.onSearchTextChange}
          value={this.state.searchText}
        />
        {this.renderSearchConditions()}
      </React.Fragment>
    );
  };

  renderSearchConditions() {
    if (!this.state.searchText) return null;

    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start"
          }}
        >
          <CheckBox
            title="Match word"
            checked={this.state.fullWord}
            onPress={this.onPressFullWord}
          />
          <CheckBox
            title="Starts with"
            checked={this.state.startOnly}
            onPress={this.onPressStartOnly}
          />
        </View>
        <CheckBox
          containerStyle={{ width: 200 }}
          title="Search meanings"
          checked={this.state.searchMeaning}
          onPress={this.onPressSearchMeaning}
        />
      </View>
    );
  }

  onPressFullWord = async () => {
    if (this.state.fullWord) {
      await this.setState({ fullWord: false });
      this.getFilteredData();
      return;
    }

    await this.setState({ fullWord: true, startOnly: false });
    this.getFilteredData();
  };

  onPressStartOnly = async () => {
    if (this.state.startOnly) {
      await this.setState({ startOnly: false });
      this.getFilteredData();
      return;
    }

    await this.setState({ startonly: true, fullWord: false });
    this.getFilteredData();
  };
  onPressSearchMeaning = async () => {
    await this.setState({ searchMeaning: !this.state.searchMeaning });
    this.getFilteredData();
  };

  renderItem = a => {
    return (
      <FlashCard
        word={a.item}
        wordDetail={this.state.data[a.item]}
        large={false}
      />
    );
  };

  onSearchTextChange = text => {
    this.setState({ searchText: text, data: this.getFilteredData(text) });
  };

  getFilteredData(text) {
    if (typeof text == "undefined") text = this.state.searchText;

    return filteredData(text, {
      fullWord: this.state.fullWord,
      startOnly: this.state.startOnly,
      searchMeaning: this.state.searchMeaning
    });
  }
}

export default AllWordList;
