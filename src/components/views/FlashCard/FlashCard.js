import React from "react";
import WordMeaning from "../../basic/WordMeaningCard";
import PropTypes from "prop-types";
import TitleCard from "../../basic/TitleOnlyCard";

class FlashCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.word !== this.props.word) {
      this.setState({ hidden: true });
    }
  }

  render() {
    return this.state.hidden
      ? this.renderWordHidden()
      : this.renderWordDetails();
  }

  renderWordHidden() {
    const { word } = this.props;

    return (
      <TitleCard
        large={this.props.large}
        title={word}
        onPress={this.showWordDetails}
      />
    );
  }

  showWordDetails = () => {
    this.setState({ hidden: false });
  };

  renderWordDetails() {
    const {
      word,
      wordDetail,
      onPressAfterEnd = () => {
        this.setState({ hidden: true });
      }
    } = this.props;

    return (
      <WordMeaning
        word={word}
        wordDetail={wordDetail}
        onPress={onPressAfterEnd}
      />
    );
  }
}

FlashCard.propTypes = {
  word: PropTypes.string.isRequired,
  wordDetail: PropTypes.object.isRequired
};

export default FlashCard;
