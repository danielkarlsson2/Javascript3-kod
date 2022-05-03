import { useContext } from 'react'
import Post from '../components/Post'
import { PostsContext } from '../contexts/PostsContext'
import { ThemeContext } from '../contexts/ThemeContext'

const PostsView = () => {

  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark

  const { posts, deletePost } = useContext(PostsContext)

  return (
    <div className='posts'>
      {posts.length? posts.map(post => (
        <Post key={post.id} post={post} deletePost={deletePost} />
      ))
      : <h2 style={{ color: theme.text }}>No posts to show</h2>
      }
    </div>
  )
}

export default PostsView