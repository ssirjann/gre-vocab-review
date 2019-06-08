import QuestionList from "../../components/views/Quiz/QuestionList";
import React from "react";
import { getFullQuizQuestions } from "../../helpers/QuizData/FullQuiz";

class FullQuiz extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "All Words Quiz"
    };
  };

  getItems = () => {
    return getFullQuizQuestions();
  };

  render() {
    return <QuestionList questions={this.getItems()} shuffle={true} />;
  }
}

export default FullQuiz;
