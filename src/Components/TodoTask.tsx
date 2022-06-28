import React from 'react'
import { ITask } from '../interfaces'
import DeleteIcon from "../Assets/Icons/delete-bin-6-line.png"

interface Props{
    task:ITask;
    completeTask(id:number):void;
    deleteTask(id:number):void;

}


const TodoTask = ({task,completeTask, deleteTask}:Props) => {
  const styles={
    completeStyle:task.completed?"line-through text-gray-400":""
  }
  return (
    <span className="flex items-center py-2 bg-gray-50 px-2 mb-4">
      <input onChange={()=>completeTask(task.id)} checked={task.completed} type="checkbox" className="mt-1 cursor-pointer"/>
      <span onClick={()=>completeTask(task.id)} className="pl-5 flex justify-between  cursor-pointer min-w-[90%]">
        <span className={`inline-block w-[80%] ${styles.completeStyle} whitespace-nowrap overflow-hidden text-ellipsis`}>{task.taskName}</span>
        <span className={`inline-block w-[18%] ${styles.completeStyle} whitespace-nowrap overflow-hidden text-ellipsis`}>{task.taskDeadline}</span>
      </span>
      <img src={DeleteIcon} onClick={()=>deleteTask(task.id)} alt="Delete Icon" className="cursor-pointer hover:scale-125 duration-150 transition-all ease-linear"/>
    </span>
  )
}

export default TodoTask