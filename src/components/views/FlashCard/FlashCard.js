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
    this.setState({ hidden: true });
  }

  render() {
    return this.state.hidden
      ? this.renderWordHidden()
      : this.renderWordDetails();
  }

  renderWordHidden() {
    const { word } = this.props;

    return <TitleCard title={word} onPress={this.showWordDetails} />;
  }

  showWordDetails = () => {
    this.setState({ hidden: false });
  };

  renderWordDetails() {
    const { word, wordDetail, onPressAfterEnd } = this.props;

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

FlashCard.defaultProps = {
  onPressAfterEnd: () => {}
};

export default FlashCard;
