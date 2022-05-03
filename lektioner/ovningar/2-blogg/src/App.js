import { useState, useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Blogs from './views/Blogs';
import About from './views/About'
import BlogDetails from './views/BlogDetails';


// const { id } = useParams()

function App() {
  return (
    <div className="app">

       {/* <BrowserRouter> */}
          <Navbar />
  
          <div className="container">
            <Routes >
              <Route path='/' element={ <Home addPost={addPost} />} />
              <Route path='/blogs' element={ <Blogs />} />
              <Route path='/about' element={ <About />} />
              <Routes path='/blogs/:id' element={ <BlogDetails />} />
  
  
            </Routes >
          </div>
      
      
      {/* </BrowserRouter> */}
    </div>

  );
}

export default App;
