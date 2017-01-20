import React from 'react';

import Card from '../Card';

const QuizCard = ({
  imageUrl,
  question,
  quizBody,
  checkAnswer,
  index,
  cardsCount,
  cardPassed,
}) => {
  const content =
    (
      <div className="card-body">
        { imageUrl &&
          <img
            src={imageUrl}
            alt=""
            className="card-img"
          />
        }
        { question &&
          <h2 className="quiz-card-question">
            {question}
          </h2>
        }
        { quizBody &&
          <div className="quiz-card-body">
            {quizBody}
          </div>
        }
        <button onClick={checkAnswer}>Enviar</button>
      </div>
    );
  return (
    <Card
      content={content}
      index={index}
      cardsCount={cardsCount}
      cardPassed={cardPassed}
    />
  );
};

QuizCard.propTypes = {
  imageUrl: React.PropTypes.string,
  question: React.PropTypes.string.isRequired,
  quizBody: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]).isRequired,
  checkAnswer: React.PropTypes.func.isRequired,
  index: React.PropTypes.number.isRequired,
  cardsCount: React.PropTypes.number.isRequired,
  cardPassed: React.PropTypes.func,
};

QuizCard.defaultProps = {
  imageUrl: null,
  question: null,
  options: null,
};

export default QuizCard;
