import { useState } from 'react'
import './App.css';
import BlogList from './components/BlogList/BlogList';
import Modal from './components/Modal/Modal';
import Title from './components/Title/Title';

function App() {

  const [showModal, setShowModal] = useState(false)

  const [blogs, setBlogs] = useState([
    { id: 1, title: 'My first blog', body: 'bla blaha bla bla ingen aning om vad jag ska skriva'},
    { id: 2, title: 'How to use React', body: 'bla blaha bla bla ingen aning om vad jag ska skriva'},
    { id: 3, title: 'CSS wizardry', body: 'bla blaha bla bla ingen aning om vad jag ska skriva'},
  ])

  const subtitle = 'A inblick in my life'

  return (
    <div className="App">
      <Title title="My awesome blog!" subtitle={subtitle} />
      <div className="container">
        <BlogList blogs={blogs} />
        <div className="mt">
          <button onClick={() => setShowModal(true)}>Show Modal</button>
        </div>        
      </div>

    { showModal && 
      <Modal handleClose={handleClose} > 
          <h2>Cookies</h2>
          <p>This site uses cookies and they are very tasty</p>
        </Modal>
    }
    

    </div>
  );
}

export default App;
