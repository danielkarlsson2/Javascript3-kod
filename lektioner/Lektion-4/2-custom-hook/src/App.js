import { useState } from 'react'
import './App.css';
import Todos from './components/Todos';

function App() {

  const [showTodos, setShowTodos] = useState(true)

  return (
    <div className="App">
      <button onClick={() => setShowTodos(false)}>hide todos</button>
      {showTodos && <Todos />}
    </div>
  );
}

export default App;
