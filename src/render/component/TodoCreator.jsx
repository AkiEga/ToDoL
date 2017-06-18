import React from 'react';
import {render} from 'react-dom';
import {Component} from 'react';

export default class TodoCreator extends Component {
    constructor(props, context, updater){
        super(props, context, updater)
        this.state = { value: ""};
    }
    _onAdd(){
        var newTodo = this.refs.inputText.value;
        this.props.onAdd(newTodo);
        this.setState({ value: "" });
    }
    _onChange(e){
        this.setState({
            value: e.target.value
        });
    }
    render(){
        return (            
            <div className="TodoCreator">
                <input 
                    type="text" 
                    value={this.state.value} 
                    ref="inputText" 
                    placeholder="Input your new todo" 
                    onChange={this._onChange.bind(this)} />
                <button onClick={this._onAdd.bind(this)}>Add</button>
            </div>
        );
    }
}