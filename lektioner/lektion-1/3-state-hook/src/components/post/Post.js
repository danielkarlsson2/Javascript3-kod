import React from 'react'
import './Post.css'

const Post = ({ title, body }) => {

  return (
    <div className='mb-2 Post'>
        <div className='card'>
            <h2>{ title }</h2>
            <p>{ body }</p>
            <button>Change to dark theme</button>
        </div>
    </div>
  )
}

export default Post