
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { ProtectedRoute } from './routes/ProtectedRoute';
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
        {/* <Route path='/admin' element={ <Admin />} /> */}
        <Route path='/admin' element={ 
          <ProtectedRoute>
            <Admin /> 
          </ProtectedRoute> 
        } />  
    {/* <Route path='/admin' element={
      isAuthenticated ? <Admin /> :<Navigate to="/login" replace /> 
    } */}

      </Routes>
    </div>

     
    </div>
  );
}

export default App;
