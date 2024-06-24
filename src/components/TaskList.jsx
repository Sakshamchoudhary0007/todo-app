import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (id, newTask) => {
    const updatedTask = prompt('Edit task', newTask);
    if (updatedTask) {
      dispatch(editTask(id, updatedTask));
    }
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.task}
          <button onClick={() => handleEdit(task.id, task.task)}>Edit</button>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
