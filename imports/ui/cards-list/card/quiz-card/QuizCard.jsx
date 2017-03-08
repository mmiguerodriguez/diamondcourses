import React from 'react';
import ReactMarkdown from 'react-markdown';

import CodeRenderer from '../../../../utils/client/CodeRenderer';
import MultipleChoiceCard from './multiple-choice-card/MultipleChoiceCard';
import OrderCard from './order-card/OrderCard';
import CodeCard from './code-card/CodeCard';

class QuizCard extends React.Component {
  static messageDuration(message, wordsPerMinute = 120) {
    /**
     * Returns an estimate of the time in milliseconds that it would take to read the message.
     * @param {string} message The message
     * @param {float} wordsPerMinute The average number of words the reader reads in a minute
     */
    const numberOfWordsEstimate = (message.match(/ /g) || []).length + 1;

    // Convert the number of words to the milliseconds it would take to read them
    const timeToRead = (numberOfWordsEstimate / (wordsPerMinute / 60)) * 1000;

    return timeToRead;
  }

  constructor(props) {
    super(props);
    this.state = {
      checkAnswer: () => {}, // Checks the answer
      answeredCorrectly: false,
      quizTries: 0, // times the user responded the quiz
    };
    this.handleCheckAnswer = this.handleCheckAnswer.bind(this);
  }

  getQuizContent() {
    let cardType = null;
    switch (this.props.type) {
      case 'multiple-choice':
        cardType = MultipleChoiceCard;
        break;
      case 'order':
        cardType = OrderCard;
        break;
      case 'code':
        cardType = CodeCard;
        break;
      default:
        console.error('cardType not accepted by QuizCard');
        break;
    }
    return React.createElement(cardType, {
      ...this.props,
      setCheckAnswerFunction: (checkAnswer => this.setState({ checkAnswer })),
    });
  }

  handleCheckAnswer() {
    const isCorrect = this.state.checkAnswer();
    ga('send', 'event', 'Lesson', 'Quiz responded', {
      // Set the card index dimension
      dimension1: this.props.getCurrentCardGlobalIndex(),
      // Set the answered correctly metric
      metric3: isCorrect,
      // Set the number of try metric
      metric4: this.state.quizTries,
    });

    this.setState({
      quizTries: this.state.quizTries + 1,
    });
    // if the answer is correct
    if (isCorrect) {
      this.setState({
        answeredCorrectly: true,
      });
    }
  }

  render() {
    const imageUrl = this.props.imageUrl;
    const question = this.props.question;
    const quizBody = this.getQuizContent();

    return (
      <div className="card-body">
        { imageUrl &&
          <img
            src={imageUrl}
            alt=""
            className="card-img"
          />
        }
        { question &&
          <ReactMarkdown
            source={question}
            className="quiz-card-question"
            renderers={{
              ...ReactMarkdown.renderers,
              CodeBlock: CodeRenderer, // used for code-highlighting
            }}
          />
        }
        { quizBody &&
          <div className="quiz-card-body">
            {quizBody}
          </div>
        }
        {
          this.state.answeredCorrectly ?
            <button
              className="btn btn-raised btn-success"
              onClick={this.props.slideCard}
            >
              Continuar
            </button> :
            <button
              className="btn btn-raised card-btn-primary"
              onClick={this.handleCheckAnswer}
            >
              Enviar
            </button>
        }
      </div>
    );
  }
}

QuizCard.propTypes = {
  type: React.PropTypes.string.isRequired,
  lessonName: React.PropTypes.string.isRequired,
  getCurrentCardGlobalIndex: React.PropTypes.func.isRequired,
  imageUrl: React.PropTypes.string,
  question: React.PropTypes.string.isRequired,
  slideCard: React.PropTypes.func.isRequired,
};

QuizCard.defaultProps = {
  imageUrl: undefined,
  question: undefined,
  options: undefined,
  cardPassed: () => {},
};

export default QuizCard;
