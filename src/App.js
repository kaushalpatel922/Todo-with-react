import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './components/Text';
import TextDisplay from './components/TextDisplay'

var App = React.createClass({
  getInitialState: function() {
    return {
      tasks: []
    }
  },
  handleSearch: function(task) {
    this.setState({
      tasks: this.state.tasks.concat(task)
    })
  },
  handleDestroy: function(task) {
    this.setState({
      tasks: this.state.tasks.pop(task)
    })
  },

  render: function() {
    return (
      <div className="App">
        <Text onEnter= {this.handleSearch}/>
          <ul>
            {this.state.tasks.map(function(tasks, index) {
            return (
              <TextDisplay task={tasks}/>
            )
          })}
          </ul>
      </div>
    );
  }
})

export default App;
