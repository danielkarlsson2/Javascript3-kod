import actiontypes from "../actiontypes";

const initState = {
    data: [],
    loading: false,
    error: null
}

const postsReducer = (state = initState, action) => {
    switch(action.type) {
        case actiontypes().posts.loading: 
            return {
                ...state,
                loading: action.payload
            }

            case actiontypes().posts.setPosts:
                return {
                    ...state,
                    data: action.payload,
                    loading: false
                }
            case actiontypes().posts.failure:
                return {
                    ...state,
                    data: [],
                    loading: false,
                    error: action.payload
                }

        default:
            return state
    }
}

export default postsReducer;