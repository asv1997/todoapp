import React from "react";
import {connect} from "react-redux"
import {deleteTask,changeEditIndex,editTask} from './actions/index'


class Task extends React.Component {


    state = {edit : ''}
    delete(){
        this.props.deleteTask(this.props.taskIndex)
    }

    onChange(e){
        this.setState({edit: e.target.value})
    }

    edit(){
        this.setState({edit:this.props.taskName})
        this.props.changeEditIndex(this.props.taskIndex);
    }

    submit(){
        this.props.changeEditIndex(-1);
        this.props.editTask(this.props.taskIndex,this.state.edit);
        this.setState({edit:''})
    }

    render(){
        if(this.props.editIndex === this.props.taskIndex){
            return (
                <div>
                    <input type="text" value={this.state.edit} onChange={(e) => this.onChange(e)}></input>
                    <button onClick={() => this.submit()}>Submit</button>
                </div>
            )
        }else{
            return(<div>
                <span>{this.props.taskName}</span>
                <button onClick={() => this.delete()}>Delete</button>
                <button onClick={() => this.edit()}>Edit</button>
            </div>)
        }
    
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        editIndex: state.editIndex
    }
    
}

export default connect(mapStateToProps,{deleteTask,changeEditIndex,editTask})(Task);