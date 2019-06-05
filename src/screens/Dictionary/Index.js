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
      </React.Fragment>
    );
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

    return filteredData(text);
  }
}

export default AllWordList;
