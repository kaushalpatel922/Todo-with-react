import React from 'react';

var Text = React.createClass({

  onFormSubmit: function(e) {
    e.preventDefault();

    var task = this.refs.task.value;
    console.log(task);
    if(task.length > 0) {
      this.refs.task.value = '';
      this.props.onEnter(task);
    }
  },

  render: function() {
    return (
      <div>
        <form onSubmit = {this.onFormSubmit}>
          <input placeholder="Enter task" ref="task" type="search"/>
          <button className="button">Submit</button>
        </form>
      </div>
    )
  }
});

export default Text;
