import React from 'react';
import {render} from 'react-dom';
import {Component} from 'react';
import moment from 'moment';
import AUILabel from 'aui-react/lib/AUILabel';
import storage from 'electron-json-storage';
import fs from 'fs';

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
        console.log("TodoCreator is importructed.");
        console.log(this.state);
    }
    _onAdd(){
        let root_path="C:/work/repo/ToDoL/tasks/";
        let tar_dir_path = root_path + this.state.title;
        // create dir for this task
        if (!fs.existsSync(tar_dir_path)){
            fs.mkdirSync(tar_dir_path);
        }
        // create configure file for this task
        let save_file_path = tar_dir_path + "/config.json";
        let this_task_json=JSON.stringify({
            title: this.state.title,
            date: this.state.date
        })
        if(fs.exists(save_file_path) != true){
            fs.writeFile(save_file_path, this_task_json, 'utf8', function (err) {
                if (err) {
                    console.log("Error was occured in saving "+save_file_path + ".");
                    return console.log(err);
                }else{
                    console.log(save_file_path + "is saved.");
                }
            });        
        }

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