import { useState, useRef } from 'react'

export const AddCustomerForm = ({ addCustomer }) => {

  const customerNameInput = useRef()
  const [customerName, setCustomerName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if(customerName.trim() === '') return

    addCustomer(customerName)
    setCustomerName('')
    customerNameInput.current.focus()

    // lägg till kunden i listan
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-center mb-4">Add Customer</h2>
      <div className="input-group">
        <input type="text" className="form-control" ref={customerNameInput} value={customerName} onChange={e => setCustomerName(e.target.value)} placeholder="Enter customer name" />
        <button className="btn btn-primary">Add Customer</button>
      </div>
      
    </form>
  )
}


