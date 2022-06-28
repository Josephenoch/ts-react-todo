import React from 'react'
import TodoTask from './TodoTask'
import {ITask, Style} from "../interfaces"

interface Props{
  todoList:ITask[];
  handleAddTask():void;
  style:Style;
  completeTask(id:number):void;
  deleteTask(id:number):void
}

const TodoSection = ({todoList, handleAddTask , style, deleteTask, completeTask}:Props) => {
  return (
    <div className=" relative bg-white w-[30rem] shadow-2xl">
        <div className="p-10 text-black">
          <div className="w-full flex justify-between mb-2">
            <span className="ml-7">Title</span>
            <span className="mr-16">Deadline</span>
          </div>
          {todoList.map((task:ITask, index:number )=>
              <TodoTask key={index} task={task} completeTask={completeTask} deleteTask={deleteTask}/>
            )}
        </div>
        <button 
          onClick={handleAddTask} 
          className={`${style.addBtn} absolute -bottom-5 p-3 rounded-full -translate-x-1/2 left-1/2 bg-purple-500 hover:bg-purple-700 active:bg-purple-900 hover:scale-105 active:scale-90 transition-all duration-100 ease-linear`}>
            Add New Task
        </button>
      </div>
  )
}

export default TodoSection