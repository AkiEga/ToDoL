import React from 'react';
import {render} from 'react-dom';
import {Component} from 'react';
import TodoCreator from './TodoCreator';
import TodoList from './TodoList';

export default class TodoApp extends Component{
    constructor(props, context, updater){
        super(props, context, updater)
        this.state = { todos: []};
    }
    onAdd(newTodo){
      this.setState({
        todos: this.state.todos.concat({item:newTodo, status:0})
      });
    }
    onDelete(i){
      var targetTodo = this.state.todos[i];
      targetTodo.status = 1;
      this.setState({
        todos: this.state.todos
      });
    }
    render(){
      return (
        <div className="todoApp">
          <TodoCreator onAdd={this.onAdd.bind(this)}/>
          <TodoList todos={this.state.todos} onDelete={this.onDelete.bind(this)}/>
        </div>
      );
    }
}
