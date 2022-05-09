const actiontypes = () => {
    return {
        auth: {},
        posts: {
            setPosts: 'SET_POSTS',
            loading: 'LOADING',
            failure: 'POST_FAILURE'
        }
    }
}

export default actiontypes;