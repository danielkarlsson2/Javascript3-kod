import { useState } from 'react'

const AddItemForm = ({ addItem }) => {

    const [productTitle, setProductTitle] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        if(productTitle.trim() === '') {
            setError(true)
            return
        }

        setError(false)
        addItem(productTitle)
        setProductTitle('')
    }

  return (
      <>
    <form className='Add-item' onSubmit={handleSubmit}>
        <input value={productTitle} onChange={e => setProductTitle(e.target.value)} type="text" />
        <button>ADD</button>
    </form>
    {error &&<p className='error'>You can't leave this empty</p>}
    </>
  )
}

export default AddItemForm