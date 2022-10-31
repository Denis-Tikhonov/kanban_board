import css from './Main.module.css'
import { Outlet } from 'react-router-dom';
import Board from '../board/Board'


const Main = (props) => {
   const { tasks, handleAddTask, handleMoveTask } = props
   
   return (
      <main className={css.main}>
         <div className={css.taskList}>
            <Board tasks={tasks} handleAddTask={handleAddTask} handleMoveTask={handleMoveTask} />
         </div>
         <div className={css.taskContent}>
            <Outlet />
         </div>
      </main>
   )
}

export default Main