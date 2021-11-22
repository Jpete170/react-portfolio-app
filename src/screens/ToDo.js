import React, {useState} from 'react'
import data from '../mockData/ToDO_Data.json'

export const ToDo_Task = ({todo, toggle}) =>{
    const handleClick = (e) =>{
        e.preventDefault();
        toggle(e.currentTarget.id)
    }
    return(
        <div id={todo.id} className={todo.complete ? "strike" : ""} onClick={handleClick}>
            <div class="">
                <ul>
                    {todo.task}
                </ul> 
            </div>
            
        </div>
    )
}

const ToDoList = ({toDoList, toggle, filter}) =>{

    return(
        <div>
            {toDoList.map(todo => {
                return(
                    <ToDo_Task todo={todo} toggle={toggle} />
                )
            })}
            <button onClick={filter}>Clear Completed Items</button>
        </div>
    )
}

const Add_ToDo_Form = ({addTask}) =>{
    const [userInput, setUserInput] = useState('');

    const handleChange = (e) =>{
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addTask(userInput);
        setUserInput("")
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
            <input value={userInput} type='text' onChange={handleChange} placeholder="Enter task here" />
            <button class="p-2">Submit Task</button>
            </div>
        </form>
    )
}

export const ToDo_Complete = () =>{
    const [toDoList, setToDo_List] = useState(data);
    
    //Handle user adding tasks to the list
    const addTask = (userInput) => {
        let copy = [...toDoList];
        copy = [...copy, {id: toDoList.length +  1, task:userInput, complete: false}];
        setToDo_List(copy)
    }
    //Handle strike through / completion functionality
    const Toggle = (id) =>{
        let mapped = toDoList.map(task =>{
            return task.id == id ? { ...task, complete: !task.complete} : {...task};
        })
        setToDo_List(mapped)
    }

    //remove completed items
    const filterCompleted =() =>{
        let filtered = toDoList.filter(task =>{
            return !task.complete
        })
        setToDo_List(filtered)
    }

    return(
        <div class="container">
            <div class="text-center">
                <h1>Simple To Do List</h1>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#explanationModal">How This Works</button>
            </div>
            <div class="modal fade" id="explanationModal" tabIndex='-1' aria-labelledby="explanationModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="explanationModalLabel">How This Works</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>

                      <div class="modal-body">
                          <p>This To Do list is filled with pre-generated data stored in a JSON file server side.</p>
                          <p>To mark an item as complete, simply click on the text. Same goes for marking a completed item as not completed</p>
                          <p>Clicking on the 'Clear Completed Items' button underneath the list will remove all items marked as complete.</p>
                          <p>You can add your own task by filling out the 'Enter task here' input field and clicking the 'Submit Task' Button.</p>
                          <p>Note that any additions will not persist.</p>
                          <p>Refreshing the page will return the To Do list to it's default state.</p>
                      </div>

                      <div class="modal-footer">
                      <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>  
                </div>
            </div>
            <div class="text-center">
                <ToDoList toDoList={toDoList} toggle={Toggle} filter={filterCompleted} ></ToDoList>
                <br />
                <Add_ToDo_Form addTask={addTask} />
            </div>
            
        </div>
    )
}