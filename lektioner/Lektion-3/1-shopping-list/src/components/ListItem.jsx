import React from 'react'

const ListItem = ({ item }) => {
  return (
    <div className='List-item'>
        <p className={`product-title ${item.completed ? 'complete' : ''}`}>{item.product}</p>
        <div className='buttons'>
            <button className='btn change-btn'><i class="fa-solid fa-pen"></i></button>
            <button className='btn delete-btn'><i class="fa-solid fa-trash"></i></button>
        </div>
    </div>
  )
}

export default ListItem