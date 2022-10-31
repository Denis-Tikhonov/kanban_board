import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TaskDiscription from './components/task-discription/TaskDiscription'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/tasks/:taskId' element={<TaskDiscription />} />
        </Route>
        <Route path='*' element={<main style={{padding: "1rem"}}><p>There's nothing never!</p></main>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);