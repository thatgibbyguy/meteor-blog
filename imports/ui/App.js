import React, { Component } from 'react';

export default class App extends Component {

  render () {
    console.log(this.props);
    return (
      <div className="app-container">
        <header>Meteor SSR Blog Tutorial {this.props.from}</header>
      </div>
    );
  }

}
