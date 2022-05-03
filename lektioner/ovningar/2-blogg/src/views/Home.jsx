import { useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({ addPost }) => {

  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const onSub = e => {
    e.preventDefault()
    addPost(title, body)
    navigate("/")
  }


// const Home = () => {
    return (
      <form className='create-post' onSubmit={onSub}>
        <div className="container">
          <h1 className='title'>New Post:</h1>
          <div className="input-group">
            <label htmlFor="title">Title: </label>
            <input type="text" placeholder='Title' className='input form-control' id='title' value={title} onChange={e => setTitle(e.target.value)}/>
          </div>
          <div className="input-group">
            <label htmlFor="body">Body: </label>
            <textarea id="body" className='mt-2 form-control' value={body} onChange={e => setBody(e.target.value)}></textarea>
          </div>
        </div>

        <button>Create blogpost</button>

      </form>
    )
  
}

export default Home