import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductCatalog } from '../store/actions/productCatalogActions'
import Loader from '../components/loader/Loader'
import ProductCard from '../components/ProductCard'


const Products = () => {

    const dispatch = useDispatch()

    const { loading, error, data: products } = useSelector(state => state.productCatalog)

    useEffect(() => {
        dispatch(getProductCatalog())
    }, [dispatch])

  return (
    <>
      { loading && <Loader /> }
      { error && <p>{error}</p>}
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5'>
        { products.map(product => (
          <ProductCard key={product._id} product={product} />
        )) }
      </div>
    </>
  )
}

export default Products