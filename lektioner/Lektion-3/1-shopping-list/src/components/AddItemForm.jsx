import { useState } from 'react'

const AddItemForm = ({ addItem }) => {

    const [productTitle, setProductTitle] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
    }

  return (
    <form className='Add-item' onSubmit={handleSubmit}>
        <input value={productTitle} onChange={e => setProductTitle(e.target.value)} type="text" />
        <button>ADD</button>
    </form>
  )
}

export default AddItemForm