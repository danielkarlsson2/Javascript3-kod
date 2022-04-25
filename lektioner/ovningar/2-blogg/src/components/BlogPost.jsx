import React from 'react'
import { Link } from 'react-router-dom'

const BlogPost = ({ post }) => {
  return (
      
    <Link to={`/blogs${post.id}`} className='blog-post'>
        
    <div className=' posts'>
        <h2 className='title'>{post.title}</h2>
        <p className='post'>{post.body.slice(0, 20)}</p>
        {/* <hr /> */}        

    </div>

    </Link>
    
  )
}

export default BlogPost