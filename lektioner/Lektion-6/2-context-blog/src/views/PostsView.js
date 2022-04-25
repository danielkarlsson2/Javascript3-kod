import React from 'react'
import Post from '../components/Post'

const PostsView = ({posts}) => {
  return (
    <div className="posts">
        {posts.length? posts.map(post => (
            <Post key={post.id} post={post} />
        ))
        : <h2>No posts to show</h2>
    }
    </div>
  )
}

export default PostsView