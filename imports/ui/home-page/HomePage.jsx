import React from 'react';

import CourseItem from './course-item/CourseItem';

class HomePage extends React.Component {
  componentDidMount() {
    ga('send', 'pageview', 'homepage');
  }
  render() {
    const coursesContent = [
      {
        name: 'Alimentación saludable',
        description: 'Mejorá tu alimentación para vivir más, bajar de peso, verte y sentirte mejor.',
        imageUrl: '/images/courses/food.png',
        courseUrl: '/course/Alimentación',
      },
      {
        name: 'Psicología',
        description: 'Aprende a planificar tu futuro, a sentirte mejor con como te ves y a sobrevivir una crisis existencial.',
        imageUrl: '/images/courses/growth-plant.png',
        courseUrl: '/course/Psicología',
      },
      {
        name: 'Programación',
        description: 'Vas a poder aprender a programar y a dominar cualquier lenguaje',
        imageUrl: '/images/courses/programming.svg',
        courseUrl: '/course/Programación',
      },
      {
        name: 'Qué curso te gustaría que agreguemos?',
        description: 'Necesitamos tu ayuda para poder seguir creciendo',
        imageUrl: '/images/courses/feedback.png',
        courseUrl: '/feedback/%2F/new-course',
      },
    ];
    const coursesArray = coursesContent.map(({ name, description, imageUrl, courseUrl }, index) =>
      <CourseItem
        name={name}
        description={description}
        imageUrl={imageUrl}
        courseUrl={courseUrl}
        key={`course-item-${index}`}
      />,
    );
    return (
      <div>
        <div id="home-page">
          <div id="home-page-courses-list">
            {
              coursesArray
            }
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
