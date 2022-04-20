import { useState, useRef } from 'react'
import AddItemForm from './AddItemForm'
// import ShoppingList from './ShoppingList'

export const ShoppingForm = ({ addProduct}) => {

    const ProductInput = useRef()
    const [ productName, setProductName ] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(productName.trim() === '') {
          setError(true) 
            return
        }
        setError(false)
        AddItemForm(productName)
        setProductName('')

    }

        addProduct(productName)
        setProductName('')
        // ProductInput.current.focus()
    

    // const ShoppingForm = () => {
      return (
        <form onSubmit={handleSubmit}>
            <h4 className='text-center mt-2 mb-3'>Lägg till i inköpslista:</h4>
    
            <div className="input-group d-flex justify-content-center">
                <input type="text" className='text-center form-control' ref={ProductInput} value={productName} onChange={e => setProductName(e.target.value)} placeholder='Lägg till vara'/>
                <button className='btn btn-info'>Lägg till</button>
            </div>
            {error && <p className='error'>DU måste skriva något</p>}
            {/* <ShoppingList /> */}
        </form>
      )

    }  
      


export default ShoppingForm