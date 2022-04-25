
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Admin from './views/Admin';
import Home from './views/Home';
import Login from './views/Login';

function App() {
  return (
    <div className="App">
      <Navbar title="Protected Routes"/>

    <div className="container">
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/admin' element={ <Admin />} />
      </Routes>
    </div>

     
    </div>
  );
}

export default App;
