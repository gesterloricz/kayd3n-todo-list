import React, { useState } from 'react';
import TodoList from './todo-list';
import './index.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <TodoList />
  );
}

export default App;
