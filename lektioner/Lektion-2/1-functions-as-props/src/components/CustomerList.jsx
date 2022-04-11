import { useState } from 'react'
import CustomerRow from './CustomerRow'

const CustomerList = ({ customers, removeCustomer }) => {

  return (
    <table className="table mt-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        
        {
          customers && customers.map(customer => <CustomerRow removeCustomer={removeCustomer} key={customer.id} customer={customer} />)
        }

        {
          !customers.length && (

            <tr>
              <td>No Customers to show</td>
            </tr>
          )
        }


        
      </tbody>
    </table>
  )
}

export default CustomerList