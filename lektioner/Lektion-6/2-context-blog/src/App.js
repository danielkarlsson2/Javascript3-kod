import { useState, useContext } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import PostsView from './views/PostsView';
import CreatePost from './views/CreatePost';
import { ThemeContext } from './contexts/ThemeContext';

function App() {




  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark

  return (
    <div className="App">
      <Navbar />
      <div className='bg' style={{ backgroundColor: theme.bg}}>
        <div className="container">
          <Routes>
            <Route path='/' element={<PostsView posts={posts} deletePost={deletePost} /> } />
            <Route path='/create' element={<CreatePost addPost={addPost} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
