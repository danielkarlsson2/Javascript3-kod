import actiontypes from '../actiontypes'

const initState = {
    loading: false,
    error: null,
    data: []
}

const productCatalogReducer = (state = initState, action) => {
    switch(action.type) {

        case actiontypes().productCatalog.getProductCatalog:
            return {
                ...state,
                loading: true
            }

        case actiontypes().productCatalog.getProductCatalogSuccess:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload
            }

        case actiontypes().productCatalog.getProductCatalogFailure:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export default productCatalogReducer