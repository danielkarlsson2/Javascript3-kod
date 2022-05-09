import { useDispatch } from "react-redux"
import { addToCart, decrement, removeOne} from '../../store/actions/cartAction'

const CartProduct = ({item}) => {

  const dispatch = useDispatch()


  return (
    <div className='d-flex justify-content-between align-items-center p-2'>
      <div className='d-flex align-items-center'>
        <img src={item.image} className="img-fluid cart-image" />
        <div>
          <div><strong>{item.name}</strong></div>
          <div><small>{item.quantity} x {item.price}</small></div>
        </div>
      </div>

      <div>
          <div className="btn-group btn-group-sm" role="group">
            <button className='btn btn-sm btn-dark' onClick={() => dispatch(decrement(item._id))}>-</button>
            <button className='btn btn-sm btn-dark' onClick={() => dispatch(addToCart(item))}>+</button>
          </div>
          <button className='btn btn-sm btn-danger' onClick={() => dispatch(removeOne(item._id))}><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
  )
}

export default CartProduct