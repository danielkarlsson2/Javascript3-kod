import {useState} from 'react'
import ProductRow from './ProductRow'

const ShoppingList = ({products,}) => {
    
    return (
        <div className='d-flex justify-content-center'>
        
        <table className='table mt-3 w-50 '>
            <thead>
                <tr>                
                    <th scope="col">Vara</th>                
                </tr>
            </thead>
        <tbody>

        {
           products && products.map(product =>  <ProductRow key={product.id} product={product} />)

        }
            {
                !products.length && (
                <tr>
                    <td>No Customers to show</td>
                </tr>
                )
            }

        </tbody>    
        </table>
        </div>
    
    )
}

export default ShoppingList