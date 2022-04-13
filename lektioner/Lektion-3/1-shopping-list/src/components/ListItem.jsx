import { useState } from 'react'
import ChangeItem from './ChangeItem'

const ListItem = ({ item, removeItem, toggleComplete }) => {

  const [change, setChange] = useState(false)

  const deleteItem = () => {
    removeItem(item.id)
  }
  const toggleChange = () => {
    setChange(change => !change)
  }

  const changeText = (text) => {
    // changeItem(item, text)
    setChange(false)
  }

  return (
    <div className='List-item' >
      {change 
      ? <ChangeItem changeText={changeText} item={item} />
      : <p onClick={() => toggleComplete(item)} className={`product-title ${item.completed ? 'complete' : ''}`}>{item.product}</p>
      
      }
        <div className='buttons'>
            <button className='btn change-btn' onClick={toggleChange}><i className="fa-solid fa-pen"></i></button>
            <button className='btn delete-btn' onClick={deleteItem}><i className="fa-solid fa-trash"></i></button>
        </div>
    </div>
  )
}

export default ListItem