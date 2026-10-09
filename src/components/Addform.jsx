import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
import './Addform.css';

export default function Addform() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    dispatch(addTodo(task.trim()));
    setTask('');
  };

  return (
    
    <form  className="add-form" onSubmit={handleSubmit}>
      <input
      className="add-input"
        type="text"
        placeholder="Add your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button  className="add-button" type="submit">Add</button>
    </form>
  );
}