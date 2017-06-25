import React from 'react';
import {render} from 'react-dom';
import {Component} from 'react';
import moment from 'moment';

export default class TodoCreator extends Component {
    constructor(props, context, updater){
        super(props, context, updater);
        this.state = {
            title: undefined,
            date: undefined,
            label: undefined
        };
    }
    _today(){        
        var today = moment().format("YYYY-MM-DD")
        this.setState({
            title: this.state.title, 
            date: today
        });
        console.log(today);

        return today;
    }
    _onAdd(){
        this.props.onAdd({
            title: this.state.title,
            date: this.state.date
        });
        this.setState({ 
            title: "", 
            date: ""
        });
    }
    _onChangeField(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render(){
        return (            
            <div className="TodoCreator">
                <form>
                    <input 
                        type="text" 
                        name="title"
                        value={this.state.title} 
                        ref="inputText" 
                        placeholder="Title" 
                        onChange={this._onChangeField.bind(this)}
                        />
                    <input
                        id='date'  
                        type="date" 
                        name="date" 
                        value={this.state.date} 
                        ref="inputDate" 
                        placeholder="Date" 
                        onChange={this._onChangeField.bind(this)}
                        />
                    <label></label>
                </form>
                <button onClick={this._onAdd.bind(this)}>Add</button>
            </div>
        );
    }
}