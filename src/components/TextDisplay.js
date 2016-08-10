import React from 'react';
import ReactDOM from 'react-dom';

var TextDisplay = React.createClass({
  handleDeleting: function(e) {
    this.props.onDelete(this.props.index);
  },
  render: function() {
    return (
      <li>
        {this.props.task}
        <button className="button" onClick={this.handleDeleting}>x</button>
      </li>
    )
  }
});

export default TextDisplay;
