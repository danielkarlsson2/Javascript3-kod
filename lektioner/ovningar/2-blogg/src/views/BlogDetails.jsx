import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const BlogDetails = () => {

    const { id } = useParams()
    const [ post, setPost] = useState(null)
    const [loading, setLoading] = useState(false)
    // const []

    useEffect(() => {
        const getPost = async () => {
            console.log('testar')
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            setPost(res.data)
            setLoading(false)

        }

        getPost()
    }, [id])


  return (
    <div>
        {loading && <p>loading...</p>}
        {post && (
            <div className="blog-details posts post mt-2">
                <h2 className='title'>{post.title}</h2>
                <p>{post.body}</p>

            </div>

        )}

    </div>
  )
}

export default BlogDetails