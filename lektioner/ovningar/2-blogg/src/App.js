
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Blogs from './views/Blogs';
import About from './views/About'
import BlogDetails from './views/BlogDetails';

function App() {
  return (
    
    <BrowserRouter>
        <Navbar />

        <div className="container">
          <Routes >
            <Route path='/' element={ <Home />} />
            <Route path='/blogs' element={ <Blogs />} />
            <Route path='/about' element={ <About />} />
            <Route path='/blogs/:id' element={ <BlogDetails />} />



          </Routes >
        </div>
    
    
    </BrowserRouter>

  );
}

export default App;
