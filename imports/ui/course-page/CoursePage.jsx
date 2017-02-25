import React from 'react';

import LessonItem from './lesson-item/LessonItem';

class CoursePage extends React.Component { // TODO: fix $.material.init()
  render() {
    // hardcoded programming lessons
    let lessonsContent;
    switch (this.props.params.courseName) {
      case 'Programación':
        lessonsContent = [
          {
            lessonName: 'Introducción',
            icon: 'book',
          },
          {
            lessonName: 'Primeros conceptos',
            icon: 'child_friendly',
          },
          {
            lessonName: 'Lenguajes',
            icon: 'language',
          },
        ];
        break;
      default: // TODO: add 404 page
      case 'Alimentación':
        lessonsContent = [
          {
            lessonName: 'Importancia de comer',
            icon: 'new_releases',
          },
          {
            lessonName: 'Qué comer',
            icon: 'kitchen',
          },
          {
            lessonName: 'Tipos de comida',
            icon: 'local_grocery_store',
          },
          {
            lessonName: 'Cómo comer',
            icon: 'restaurant',
          },
        ];
        break;
    }

    const lessonsArray = lessonsContent.map(({ lessonName, icon }, index) =>
      <LessonItem
        key={`lesson-item-${index}`}
        courseName={this.props.params.courseName}
        lessonName={lessonName}
        icon={icon}
      />
    );
    return (
      <div id="course-page" className="animated zoomIn">
        <div id="course-page-lessons-list">
          {lessonsArray}
        </div>
      </div>
    );
  }
}

CoursePage.propTypes = {
  params: React.PropTypes.shape({
    courseName: React.PropTypes.string.isRequired,
  }),
}

export default CoursePage;