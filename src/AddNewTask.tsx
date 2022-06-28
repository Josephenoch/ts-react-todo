import React, { ChangeEvent } from 'react'
import CancelIcon from "./Assets/Icons/close-circle-line.png"
import { Style } from './interfaces'

interface Props{
    style:Style;
    handleAddTask():void;
    taskTitle:string;
    deadline:number;
    handleChange(e:ChangeEvent):void
    handleSubmit():void
}
const AddNewTask = ({style, handleAddTask, taskTitle, deadline, handleChange, handleSubmit}:Props) => {
  return (
    <div className={`${style.inputDiv} shadow-2xl relative space-y-2 w-[30rem] py-10 flex-col items-center bg-white mt-10 rounded-b-2xl`}>
        <img src={CancelIcon} onClick={handleAddTask} alt="Cancel Icon" className="absolute right-5 top-4 cursor-pointer"/>
        <div className="w-[90%]">
            <label htmlFor='titleInput' className="text-black inline-block mb-1">Todo Title</label>
            <input 
            id="titleInput"
            type="text" 
            name="todoName" 
            value={taskTitle} 
            onChange={(e)=>handleChange(e)}
            className="w-full rounded-md text-gray-800  bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-200 shadow-sm p-2" 
            />
        </div>
        <div className="w-[90%]">
            <label htmlFor='deadLine' className="text-black inline-block mb-1">Todo Deadline (in Days)</label>
            <input 
            id="deadlineInput"
            type="number" 
            name="todoDays" 
            value={deadline} 
            onChange={(e)=>handleChange(e)}
            className="w-full rounded-md text-gray-800 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-200 shadow-sm p-2" 
            />
            </div>
        <button 
        onClick={handleSubmit} 
        className="absolute -bottom-5 p-3 rounded-full -translate-x-1/2 left-1/2 bg-purple-500 hover:bg-purple-700 active:bg-purple-900 hover:scale-105 active:scale-90 transition-all duration-100 ease-linear">Add New Task</button>
    </div>
  )
}

export default AddNewTask