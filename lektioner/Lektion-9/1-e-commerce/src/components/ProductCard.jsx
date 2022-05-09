import { useDispatch } from 'react-redux'
import { addToCart} from '../store/actions/cartAction'

const ProductCard = ({product}) => {

    const dispatch = useDispatch()

  return (
    <div className="col">
        <div className="card h-100">
            <div className="img-container">
                <img src={product.image} className="image" />  
            </div>
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">
            {product.desc.slice(0,50)}...
            </p>
            <div className='d-flex justify-content-between align-items-center'>
                <button className='btn btn-info' onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
                <p className='text-danger h5 m-0'>{product.price}</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProductCard