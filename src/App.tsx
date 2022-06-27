import React,{FC, useState, ChangeEvent} from 'react';

const App:FC = () => {
  const [addTask, setAddTask] = useState<boolean>(false)
  const [taskTitle, setTaskTitle] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [tasks, setTasks] = useState([])

  const handleChange = (Event:ChangeEvent<HTMLInputElement>) =>{

  }
  const handleAddTask = () =>{
    setAddTask(prevState=>!prevState)
  }
  const style ={
    addBtn:addTask?"hidden h-0":"inline",
    inputForm:addTask?"flex":"hidden"
  }
  return (
    <div className="flex flex-col bg-gray-300 text-white h-screen w-screen items-center justify-center">
      <div className="w-[30rem] bg-purple-500 mb-10 shadow-2xl">
        <h1 className="text-center py-4 font-semibold ">Website Todo</h1>
      </div>
      <div className=" relative bg-white w-[30rem] shadow-2xl">
        <div className="p-10 text-black">
          <li>Styleguide Creation</li>
        </div>
        <button onClick={handleAddTask} className={`${style.addBtn} absolute -bottom-5 p-3 rounded-full left-[40%] bg-purple-500 hover:bg-purple-700 active:bg-purple-900 hover:scale-105 active:scale-90 transition-all duration-100 ease-linear`}>Add New Task</button>
      </div>
      <form className={`${style.inputForm} relative space-y-2 w-[30rem] py-10 flex-col items-center bg-white mt-10`}>
        <input placeholder="Enter todo title..." type="text" name="todoName" className="w-[90%] rounded-md text-gray-800 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-200 shadow-sm p-2"onChange={(e)=>handleChange(e)}/>
        <input placeholder="Enter days to deadline..." type="number" name="todoDays" className="w-[90%] rounded-md text-gray-800 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-200 shadow-sm p-2" onChange={(e)=>handleChange(e)}/>
        <button onClick={handleAddTask} className="absolute -bottom-5 p-3 rounded-full left-[40%] bg-purple-500 hover:bg-purple-700 active:bg-purple-900 hover:scale-105 active:scale-90 transition-all duration-100 ease-linear">Add New Task</button>
      </form>
    </div>
  );
}

export default App;
