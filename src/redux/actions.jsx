export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task
  });
  
  export const deleteTask = (id) => ({
    type: 'DELETE_TASK',
    payload: id
  });
  
  export const editTask = (id, task) => ({
    type: 'EDIT_TASK',
    payload: { id, task }
  });

  