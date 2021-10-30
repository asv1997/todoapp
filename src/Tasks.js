import React from "react";
import {getTasks,addTask} from './actions'
import {connect} from 'react-redux'
import Task from "./Task";


class Tasks extends React.Component {

    componentDidMount(){
        this.props.getTasks();
    }

    state = {newTask : ''}

    renderList(){
        return this.props.tasks.map((task,index) => {
            return (
                <div>
                   <Task taskName={task} taskIndex={index}></Task>
                </div>
            )
        })
    }

    onChange(e){
        this.setState({newTask: e.target.value})
    }

    Add(){
        this.props.addTask(this.state.newTask);
        this.setState({newTask:''})
    }

    render(){
      return(<div>

          <input value={this.state.newTask} onChange={(e) => this.onChange(e)} type="text"></input><button onClick={() => this.Add()}>Add</button>
          {this.renderList()}

      </div>)
    }
}

const mapStateToProps = (state) => {
    return  {
        tasks : state.tasks
    }
}

export default connect(mapStateToProps,{getTasks,addTask})(Tasks);