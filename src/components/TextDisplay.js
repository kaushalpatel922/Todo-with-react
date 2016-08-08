import React from 'react';
import ReactDOM from 'react-dom';
import Text from './Text';

var TextDisplay = React.createClass({
  handleDestroy: function(task) {
    this.setState({
      tasks: this.props.tasks
    })
    console.log(this.props.tasks)
  },
  render() {
    return (
      <li>
        {this.props.task}
        <button className="button" onClick={this.handleDestroy}>x</button>
      </li>
    )
  }
});

export default TextDisplay
