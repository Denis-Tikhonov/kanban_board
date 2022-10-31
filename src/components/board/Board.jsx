import React from 'react'
import { LIST_TYPES } from '../../config'
import TaskList from '../task-list/TaskList'

const Board = (props) => {
    const { tasks, handleAddTask, handleMoveTask } = props

    return (
        <React.Fragment>
            <TaskList type={LIST_TYPES.BACKLOG} tasks={tasks} handleAddTask={handleAddTask} handleMoveTask={handleMoveTask} />
            <TaskList type={LIST_TYPES.READY} tasks={tasks} handleAddTask={handleAddTask} handleMoveTask={handleMoveTask} />
            <TaskList type={LIST_TYPES.IN_PROGRESS} tasks={tasks} handleAddTask={handleAddTask} handleMoveTask={handleMoveTask} />
            <TaskList type={LIST_TYPES.FINISHED} tasks={tasks} handleAddTask={handleAddTask} handleMoveTask={handleMoveTask}/>
        </React.Fragment>
    )
}

export default Board