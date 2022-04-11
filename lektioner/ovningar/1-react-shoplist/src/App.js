import { useState } from 'react';
import Header from './components/Header'
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';
import './App.css';


function App() {

  const [products, setProducts] = useState([
    { id: 1, name: 'smör'},
    { id: 2, name: 'mjölk'},
  ])
  
  const addProduct = (product) => {
    setProducts(oldProducts => {
      return[...oldProducts, {id: Date.now().toString(), name: product }]
    })

  }
  return (
    <div className="header">
      <Header />
      <div className='container mt-4 main border'>
        <ShoppingForm addProduct={addProduct}/>
        <ShoppingList products={products}/>
      </div>
    </div>
  );
}

export default App;
