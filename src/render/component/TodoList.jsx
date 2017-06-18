import React from 'react';
import {render} from 'react-dom';
import {Component} from 'react';

export default class TodoList extends Component{
  constructor(props){
    super(props);
    this._onDelete = this._onDelete.bind(this);
  }
  _onDelete(index){
    this.props.onDelete(index);
  }

  render(){
    return (
      <ul>
        {
          this.props.todos.map(function(todo,index){
            if(todo.status == 0){
              return (
                <li key={index}>
                  <input  type="checkbox" 
                          onClick={this._onDelete.bind(this, index)}/>{todo.item}, {index}
                </li>
              )
            }else{
              return <li><s>{todo.item}</s></li>
            }
          },this)
        }
      </ul>
    );
  }
}