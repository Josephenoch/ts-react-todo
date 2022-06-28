import React,{FC, useState, ChangeEvent} from 'react';
import TodoTask from './Components/TodoTask';
import { ITask } from './interfaces';
import Header from './Components/Header';
import TodoSection from './Components/TodoSection';
import AddNewTask from './AddNewTask';

const App:FC = () => {
  const [id, setId] = useState<number>(0)
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
    setId(prevState=>prevState+1)
    const newTask = {taskName:taskTitle,taskDeadline:deadline, id:id+1, completed:false}
    setTodoList([...todoList,newTask])
    setTaskTitle("")
    setDeadline(0)
    handleAddTask()
  }
  const deleteTask = (id:number):void=>{
    setTodoList(prevState=>{
      const oldState = [...prevState].filter(old=>old.id!==id)
      return [...oldState]
    })
  }
  const completeTask = (id:number):void=>{
    setTodoList(prevState=>{
      const oldState = [...prevState]
      const index = oldState.findIndex(old=>old.id===id)
      oldState[index]={...oldState[index],completed:!oldState[index].completed}
      return [...oldState]
    })
  }
  const style ={
    addBtn:addTask?"hidden h-0":"inline",
    inputDiv:addTask?"flex":"hidden"
  }
  return (
    <div className="flex flex-col bg-gray-300 text-white h-screen w-screen items-center justify-center">
      <Header/>
      <TodoSection 
        style={style} 
        handleAddTask={handleAddTask} 
        todoList={todoList}
        deleteTask={deleteTask}
        completeTask={completeTask}  
      />
      <AddNewTask
        style={style}
        handleAddTask={handleAddTask}
        taskTitle={taskTitle}
        deadline={deadline}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
