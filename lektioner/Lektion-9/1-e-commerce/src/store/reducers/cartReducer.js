import actiontypes from "../actiontypes"

const initState = {
    cart: [],
    totalQuantity: 0,
    totalAmount: 0
}

const cartReducer = (state = initState, action) => {
    // let itemRef;



    switch(action.type) {

        case actiontypes().cart.add: {

            const itemRef = state.cart.find(item => item._id === action.payload._id)

            let cartItem = {
                ...action.payload,
                quantity: 1
            }

            itemRef
            ? itemRef.quantity += 1
            : state.cart = [...state.cart, cartItem]   

            return { 
                ...state,
                totalQuantity: getTotalQuantity(state.cart),
                totalAmount: getTotalAmount(state.cart)
            }
        }

            case actiontypes().cart.decrement:{
                
                const itemRef = state.cart.find(item => item._id === action.payload)

                itemRef.quantity === 1
                ? state.cart = state.cart.filter(item => item._id !== action.payload)
                : itemRef.quantity -= 1

                return {
                    ...state,     
                    totalQuantity: getTotalQuantity(state.cart),
                    totalAmount: getTotalAmount(state.cart)               
                }
            }

            case actiontypes().cart.removeOne: {
                state.cart = state.cart.filter(item => item._id !== action.payload)

                return {
                    ...state,
                    totalQuantity: getTotalQuantity(state.cart),
                    totalAmount: getTotalAmount(state.cart)
                }
            }

            case actiontypes().cart.clearCart: {
                return {
                    ...state,
                    cart: [],
                    totalAmount: 0,
                    totalQuantity: 0
                }
            }
            // om den finns

        default: 
            return state
    }
}

export default cartReducer

const getTotalQuantity = cart => {
    let quantity = 0

    cart.forEach(item => {
        quantity += item.quantity
    })

    return quantity
}

const getTotalAmount = cart => {
    let total = 0

    cart.forEach(item => {
        total += item.price * item.quantity
    })

    return total
}