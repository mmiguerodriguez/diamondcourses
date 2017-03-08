import React from 'react';

import CardsList from '../cards-list/CardsList';
import {
  IntroduccionLesson,
  PrimerosConceptosLesson,
  LenguajesLesson,
} from './HardcodedProgrammingCourseContent';
import {
  ImportanciaDeComerLesson,
  QueComerLesson,
  TiposDeComidaLesson,
  ComoComerLesson,
} from './HardcodedFoodCourseContent';
import {
  IntroPsicologiaLesson,
  PesimismoYOptimismoLesson,
  ProblemaMenteCuerpoLesson,
  CrisisExistencialesLesson,
} from './HardcodedSelfHelpCourseContent';

import ProgressBar from './progress-bar/ProgressBar';

class LessonPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCardGlobalIndex: 0, // The global index of the currently visible
                                 // card
    };

    this.setCurrentCardGlobalIndex = this.setCurrentCardGlobalIndex.bind(this);
    this.getCurrentCardGlobalIndex = this.getCurrentCardGlobalIndex.bind(this);
  }

  setCurrentCardGlobalIndex(currentCardGlobalIndex) {
    this.setState({
      currentCardGlobalIndex,
    });
  }

  getCurrentCardGlobalIndex() {
    return this.state.currentCardGlobalIndex;
  }

  componentDidMount() {
    ga('send', 'pageview', `course/${this.props.params.courseName}/${this.props.params.lessonName}`);
  }

  render() {
    let cardsContent = [];
    if (this.props.params.courseName === 'Programación') {
      switch (this.props.params.lessonName) {
        case 'Introducción':
          cardsContent = IntroduccionLesson;
          break;
        case 'Primeros conceptos':
          cardsContent = PrimerosConceptosLesson;
          break;
        case 'Lenguajes':
          cardsContent = LenguajesLesson;
          break;
        default:
          cardsContent = IntroduccionLesson;
          break;
      }
    } else if (this.props.params.courseName === 'Alimentación') {
      switch (this.props.params.lessonName) {
        case 'Importancia de comer':
          cardsContent = ImportanciaDeComerLesson;
          break;
        case 'Qué comer':
          cardsContent = QueComerLesson;
          break;
        case 'Tipos de comida':
          cardsContent = TiposDeComidaLesson;
          break;
        case 'Cómo comer':
          cardsContent = ComoComerLesson;
          break;
        default:
          cardsContent = ImportanciaDeComerLesson;
          break;
      }
    } else if (this.props.params.courseName === 'Psicología') {
      switch (this.props.params.lessonName) {
        case 'Introducción':
          cardsContent = IntroPsicologiaLesson;
          break;
        case 'Pesimismo y optimismo':
          cardsContent = PesimismoYOptimismoLesson;
          break;
        case 'Problema mente-cuerpo':
          cardsContent = ProblemaMenteCuerpoLesson;
          break;
        case 'Crisis existenciales':
          cardsContent = CrisisExistencialesLesson;
          break;
        default:
          cardsContent = IntroPsicologiaLesson;
          break;
      }
    }

    return (
      <div>
        <ProgressBar
          progress={(this.state.currentCardGlobalIndex / (cardsContent.length - 2)) * 100}
        />
        <CardsList
          cards={cardsContent}
          lessonName={this.props.params.lessonName}
          setCurrentCardGlobalIndex={this.setCurrentCardGlobalIndex}
          getCurrentCardGlobalIndex={this.getCurrentCardGlobalIndex}
        />
      </div>
    );
  }
}

LessonPage.propTypes = {
  params: React.PropTypes.shape({
    courseName: React.PropTypes.string.isRequired,
    lessonName: React.PropTypes.string.isRequired,
  }),
};

LessonPage.defaultProps = {
  params: null,
};

export default LessonPage;
