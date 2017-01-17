import React from 'react';

import QuizCard from '../QuizCard';

class MultipleChoiceCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  handleChange(event) {
    this.setState({
      selectedOption: event.target.value,
    });
  }

  checkAnswer() {
    const selectedOption = this.state.selectedOption;

    if (!selectedOption) {
      $.snackbar({ content: 'No seleccionaste ninguna respuesta' });
    } else if (!this.props.options[selectedOption].correct) {
      const content = this.props.options[selectedOption].message || 'Incorrecto';
      $.snackbar({ content });
    } else {
      const content = this.props.options[selectedOption].message || 'Correcto';
      $.snackbar({ content });

      // TODO: continue to the next card
    }
  }

  render() {
    const optionsArray = this.props.options.map((option, index) => (
      <div
        className="multiple-choice-card-option"
        key={`option-${index}`}
      >
        <input
          className="multiple-choice-card-radio"
          type="radio"
          name="multiple-choice-card-quiz"
          value={index}
          checked={this.state.selectedOption === `${index}`}
          onChange={this.handleChange}
        />
        <h4 className="multiple-choice-card-content">{option.content}</h4>
      </div>
    ));

    return (
      <QuizCard
        imageUrl={this.props.imageUrl}
        question={this.props.question}
        options={optionsArray}
        checkAnswer={this.checkAnswer}
        index={this.props.index}
        cardsCount={this.props.cardsCount}
        cardPassed={this.props.cardPassed}
      />
    );
  }
}

MultipleChoiceCard.propTypes = {
  imageUrl: React.PropTypes.string,
  question: React.PropTypes.string.isRequired,
  options: React.PropTypes.arrayOf(React.PropTypes.shape({
    content: React.PropTypes.string.isRequired,
    message: React.PropTypes.string,
    correct: React.PropTypes.bool,
  })).isRequired,
  index: React.PropTypes.number.isRequired,
  cardsCount: React.PropTypes.number.isRequired,
  cardPassed: React.PropTypes.func.isRequired,
};

MultipleChoiceCard.defaultProps = {
  imageUrl: null,
};

export default MultipleChoiceCard;