import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from '../components/Post'
import { getPosts } from '../store/actions/postAction'

const NewsView = () => {

  const dispatch = useDispatch()
  const { data, loading} = useSelector(state => state.posts)
  // const loading = useSelector(state => state.posts.loading)
  // const posts = useSelector(state => state.posts.data)

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <div>
      { loading && <p>Loading...</p>}
      { data.map(post => <Post key={post.id} post={post}/>)}
    </div>
    
  )
}

export default NewsView