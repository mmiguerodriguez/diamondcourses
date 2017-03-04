import React from 'react';

import Navbar from './navbar/Navbar';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* We access to the current component name via its function's name */}
        <Navbar
          className="animated fadeInDown"
          currentUrl={this.props.location.pathname}
          currentComponentName={this.props.routes[1].component.name}
        />
        <div id="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
  location: React.PropTypes.shape({
    pathname: React.PropTypes.string.isRequired,
  }).isRequired,
  routes: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      component: React.PropTypes.func.isRequired,
    }).isRequired,
  ).isRequired,
};

export default App;
