import React, { Component } from 'react';
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
  handleDelete: function(index) {
    this.state.tasks.splice(index,1)
    this.setState({
      tasks: this.state.tasks
    })
  },

  render: function() {
    return (
      <div className="App">
        <h2>To-do list</h2>
        <Text onEnter= {this.handleSearch}/>
          <ul className="new-tasks">
            {this.state.tasks.map(function(tsk, index) {
              return (
                <TextDisplay index={index} task={tsk} key={index} onDelete={this.handleDelete}/>
              )
            }.bind(this))}
          </ul>
      </div>
    );
  }
})

export default App;
