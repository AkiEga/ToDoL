import React from 'react';
import {render} from 'react-dom';
import {Component} from 'react';
import moment from 'moment';
import AUILabel from 'aui-react/lib/AUILabel'

function today(){
    var today = moment().format("YYYY-MM-DD");
    this.setState({
        title: this.state.title, 
        date: today
    });
    console.log(today);

    return today;
}

export default class TodoCreator extends Component {
    constructor(props, context, updater){
        super(props, context, updater);
        this.state = {
            title: undefined,
            date: undefined,
            label: undefined
        };
        console.log("TodoCreator is constructed.");
        console.log(this.state);
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
                <form class="aui">
                    <div class="field-group">
                        <label for="text-input">Title: </label>
                        <input 
                            type="text" 
                            name="title"
                            value={this.state.title} 
                            ref="inputText" 
                            placeholder="Title" 
                            onChange={this._onChangeField.bind(this)}
                            />
                    </div>
                    <div class="field-group">
                        <label for="text-input">Date: </label>
                        <input 
                            id='date'  
                            type="date" 
                            name="date"                         
                            ref="inputDate" 
                            placeholder="Date"                         
                            value={this.state.date} 
                            onChange={this._onChangeField.bind(this)}/>                    
                    </div>
                    <div class="field-group">
                        <label for="text-input">Label: </label>
                        <AUILabel>test</AUILabel>
                    </div>
                </form>
                
                <button onClick={this._onAdd.bind(this)}>Add</button>
            </div>
        );
    }
}