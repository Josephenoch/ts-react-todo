import React from 'react'
import { ITask } from '../interfaces'

interface Props{
    task:ITask;
}

const TodoTask = ({task}:Props) => {
  return (
    <span>{task.taskName}</span>
  )
}

export default TodoTask