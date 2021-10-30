
export const getTasks = () => {
   
    return {
        type: "GET_TASKS",
        payload: []
    }
}

export const addTask = (task) => {
    return {
        type: "ADD_TASK",
        payload: task
    }
}

export const deleteTask = (index) => {
    console.log("delete action called")
    return {
        type: "DELETE_TASK",
        payload: index
    }
}

export const editTask = (index,taskname) => {
    return {
        type: "EDIT_TASK",
        payload: {index,taskname}
    }
}

export const changeEditIndex = (index) => {
    return {
        type: "EDIT_INDEX",
        payload: index
    }
}
