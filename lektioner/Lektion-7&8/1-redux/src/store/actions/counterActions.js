import actiontypes from "../actiontypes"

// const action = {
//     type: 'INCREMENT',
//     payload: 
// }


export const increment = () => {
    return {
        type: actiontypes().counter.increment
    }
}

export const decrement = () => {
    return {
        type: actiontypes().counter.decrement
    }
}