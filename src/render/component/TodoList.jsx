import React from 'react';
import { render } from 'react-dom';
import { Component } from 'react';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    //this._onDelete = this._onDelete.bind(this);
  }
  _onDelete(index) {
    this.props.onDelete(index);
  }

  render() {
    return (
      <ul>
        {
          this.props.todos.map(function (todo, i) {
            if (todo.status == 0) {
              return (
                <details key={i}>
                  <summary>{todo.item.title}</summary>
                  <li>
                    <input 
                      type="checkbox"
                      onClick={this._onDelete.bind(this, i)} />
                      ID: {i}, Title: {todo.item.title}, Date: {todo.item.date}
                  </li>
                </details>
              )
            } else {
              return <li key={i}><s>{todo.item.title}</s></li>
            }
          }, this)
        }
      </ul>

    );
  }
}