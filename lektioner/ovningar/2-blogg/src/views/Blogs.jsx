import { useState, useEffect } from 'react'
import axios from 'axios'
import BlogPost from '../components/BlogPost'


const Blogs = () => {

    const [posts, setPosts] = useState([])
    // console.log(blogs)

    useEffect(() => {

        const getPosts = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')

            setPosts(res.data)
        }

        getPosts()
    }, [])


  return (
    <div className='blogs'>
        {posts.map(post => (
            <BlogPost key={post.id} post={post} />
        ))}

    </div>
  )
}

export default Blogs