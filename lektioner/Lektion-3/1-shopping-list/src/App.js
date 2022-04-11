import { useState } from 'react'
import './App.css';
import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header';
import ShoppingList from './components/ShoppingList';



function App() {

  const [items, setItems] = useState([
    {
      id: uuidv4(),
      product: 'mjölk',
      completed: false
    },
    {
      id: uuidv4(),
      product: 'bröd',
      completed: true
    },
    {
      id: uuidv4(),
      product: 'smör',
      completed: false
    },

  ])
  return (
  <div className='App container'>
    <Header title='ShoppingList' />
    <ShoppingList items={items}/>
    
  </div>
  );
}

export default App;
