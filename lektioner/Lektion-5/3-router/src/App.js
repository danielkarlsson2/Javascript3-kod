
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home';
import About from './views/About';
import Shop from './views/Shop';
import ProductDetails from './views/ProductDetails';


// så här gjorde innan senaste uppdatering
// import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    
      <BrowserRouter>
        <Navbar />

          <div className="container">
            <Routes >
              <Route path='/' element={ <Home /> } />
              <Route path='/about' element={ <About /> }/>
              <Route path='/shop' element={ <Shop /> }/>
              <Route path='/shop/:id' element={ <ProductDetails />}/>
              <Route path='*' element={
                <div>
                  <h2>404, Path not found</h2>
                </div>
              } />
            </Routes>
          </div>
      </BrowserRouter>






);
}

export default App;

{/* innan gjorde de component istället för element */}