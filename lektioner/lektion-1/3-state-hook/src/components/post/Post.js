import { useState } from 'react'
import './Post.css'

const Post = ({ title, body }) => {

  const [isDark, setIsDark] = useState(false)

  const setTheme = () => {
    setIsDark(theme => !theme)
  }

  return (
    <div className='mb-2 Post'>
        <div className={`card ${ isDark ? 'dark' : '' } `} >
            <h2>{ title }</h2>
            <p>{ body }</p>
            <button onClick={setTheme}>Change to { isDark ? 'light' : 'dark '} dark theme</button>
        </div>
    </div>
  )
}

export default Post