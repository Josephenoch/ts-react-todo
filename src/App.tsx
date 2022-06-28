import React,{FC, useState, ChangeEvent} from 'react';
import TodoTask from './Components/TodoTask';
import { ITask } from './interfaces';

const App:FC = () => {
  const [addTask, setAddTask] = useState<boolean>(false)
  const [taskTitle, setTaskTitle] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])

  const handleChange = (e:ChangeEvent<HTMLInputElement>):void =>{
    if(e.target.name==="todoName"){
      setTaskTitle(e.target.value)
    }
    else{
      setDeadline(Number(e.target.value))
    }
  }
  const handleAddTask = () =>{
    setAddTask(prevState=>!prevState)
  }
  const handleSubmit = () :void|false =>{
    if(taskTitle===""){
      alert("Please enter the Task name")
      return false
    }
    const newTask = {taskName:taskTitle,taskDeadline:deadline}
    setTodoList([...todoList,newTask])
    setTaskTitle("")
    setDeadline(0)
    handleAddTask()
  }
  const style ={
    addBtn:addTask?"hidden h-0":"inline",
    inputDiv:addTask?"flex":"hidden"
  }
  return (
    <div className="flex flex-col bg-gray-300 text-white h-screen w-screen items-center justify-center">
      <div className="w-[30rem] bg-purple-500 mb-10 shadow-2xl">
        <h1 className="text-center py-4 font-semibold ">Website Todo</h1>
      </div>
      <div className=" relative bg-white w-[30rem] shadow-2xl">
        <div className="p-10 text-black">
          {todoList.map((task:ITask, index:number )=>
            <li>
              <TodoTask key={index} task={task}/>
            </li>)}
        </div>
        <button 
          onClick={handleAddTask} 
          className={`${style.addBtn} absolute -bottom-5 p-3 rounded-full left-[40%] bg-purple-500 hover:bg-purple-700 active:bg-purple-900 hover:scale-105 active:scale-90 transition-all duration-100 ease-linear`}>
            Add New Task
        </button>
      </div>
      <div className={`${style.inputDiv} shadow-2xl relative space-y-2 w-[30rem] py-10 flex-col items-center bg-white mt-10`}>
        <input 
          placeholder="Enter todo title..." 
          type="text" 
          name="todoName" 
          value={taskTitle} 
          onChange={(e)=>handleChange(e)}
          className="w-[90%] rounded-md text-gray-800 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-200 shadow-sm p-2" 
          />
        <input 
          placeholder="Enter days to deadline..." 
          type="number" 
          name="todoDays" 
          value={deadline} 
          onChange={(e)=>handleChange(e)}
          className="w-[90%] rounded-md text-gray-800 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-200 shadow-sm p-2" 
          />
        <button 
          onClick={handleSubmit} 
          className="absolute -bottom-5 p-3 rounded-full left-[40%] bg-purple-500 hover:bg-purple-700 active:bg-purple-900 hover:scale-105 active:scale-90 transition-all duration-100 ease-linear">Add New Task</button>
      </div>
    </div>
  );
}

export default App;
