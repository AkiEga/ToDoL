import React from 'react';
import { render } from 'react-dom';
import { Component } from 'react';
import CSSModules from 'react-css-modules';
import style from './TodoList.css';

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
                <details key={i} className={style.details}>
                  <summary>{todo.item.title}</summary>
                  <input type="checkbox" onClick={this._onDelete.bind(this, i)} />                      
                  <span>ID: {i}, Title: {todo.item.title}, Date: {todo.item.date}</span>
                </details>
              )
            } else {
              return <li key={i} className={style.li}><s>{todo.item.title}</s></li>
            }
          }, this)
        }
      </ul>

    );
  }
}