import { useEffect, useState } from 'react'
import './App.css';
import AddProductForm from './components/AddProductForm';
import Product from './components/Product';

function App() {

  // state
  const [products, setProducts] = useState([
    { id: Date.now().toString(), name: 'Product 1', desc: 'Produktbeskrivning'}
  ])

  // LIFECYCLES
  useEffect(()=> {
    const storedProducts = JSON.parse(localStorage.getItem('products'))
    if(storedProducts)
      setProducts(storedProducts)

  }, [])

  useEffect(() => {
    console.log('2')
    localStorage.setItem('products', JSON.stringify(products))
  
  }, [products])
  



  // FUNCTIONS
  const addProduct = product => {
    setProducts(prev => [...prev, product])
  }

  const editProduct = product => {
    setProducts(prev => {
      let newProducts = prev.map(p => {
        if(p.id === product.id) {
          return p = product
        }
        return p
      })
      return newProducts
    })
  }

  return (
    <div className="App container">
      <AddProductForm addProduct={addProduct}/>
      <br />
      <br />

      {
        products.map(product => (
          <Product key={product.id} product={product} editProduct={editProduct}/>
      ))
      }
    </div>
  );
}

export default App;
