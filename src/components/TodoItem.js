import React from 'react';
import 'boxicons';

const TodoItem = ({ task, index, deleteTask }) => {
  return (
    <li>
      {task} 
      <button onClick={() => deleteTask(index)}>
        <box-icon name='trash' color="white"></box-icon>
      </button>
    </li>
  );
};

export default TodoItem;
