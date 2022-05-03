import { createContext } from 'react'

export const PostsContext = createContext()

// export const PostsContextProvider =     


const [posts, setPosts] = useState([
    {
      id: 'akjhsb23jknb',
      title: 'My first post',
      body: 'This is my first post ever!'
    },
    {
      id: 'akjasfgf3fcds',
      title: 'My second post',
      body: 'This is my second post!'
    },
    {
      id: 'akjasdf3sdcf2',
      title: 'My third post',
      body: 'This is my third post!'
    }
  ])

  const addPost = (title, body) => {
    let post = {
      id: Date.now().toString(),
      title,
      body
    }

    setPosts(state => {
      return [post, ...state]
    })
  }

  const deletePost = id => {
    setPosts(state => state.filter(post => post.id !== id))
  }

export const PostsContextProvider = () => {
  return (
    <PostsContext.Provider>
        {children}
    </PostsContext.Provider>

  )
}
