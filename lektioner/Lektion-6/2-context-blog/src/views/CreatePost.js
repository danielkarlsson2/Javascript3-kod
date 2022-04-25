import React from 'react'

const CreatePost = () => {
  return (
    <form className='create-post'>
        <h2 className='title'>Create new post</h2>
        <div className="input-group">
            <label htmlFor="title" className='input-label'>Title: </label>
            <input type="text" className='form-control' id='title' />
        </div>
        <div className="input-group">
            <label htmlFor="body" className='input-label'>Body: </label>
            <textarea id="body" className='form-control'></textarea>
        </div>
        <button className='btn btn-form'>Create Post</button>
    </form>
  )
}

export default CreatePost