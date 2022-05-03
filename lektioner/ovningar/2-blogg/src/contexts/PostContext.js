import { createContext, useState } from "react";

export const PostsContext = createContext()

const [posts, setPosts] = useState([
    {

    }
])

const addPost = (title, body) => {
    let post ={
        id: Date.now().toString(),
        title, 
        body
    }
    
    setPosts(state => {
        return [post, ...state]
    })
}



export const PostsContextProvider = () => {
    return (
        <PostsContext.Provider>
            {children}
        </PostsContext.Provider>
    )
}