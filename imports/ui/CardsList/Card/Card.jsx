import React from 'react';

class Card extends React.Component {

  render() {
    const cardStyle = {
      zIndex: this.props.cardsCount - this.props.index,
      transform: this.props.cardsCount ?
        `translateY(${10 * (this.props.index)}px)` : null,
    };
    return (
      <div className="_card" style={cardStyle}>
        {this.props.content}
      </div>
    );
  }
}

Card.propTypes = {
  content: React.PropTypes.element.isRequired,
  index: React.PropTypes.number,
  cardsCount: React.PropTypes.number,
};

export default Card;
