import React from 'react'
import ListItem from './ListItem'

const ShoppingList = ({ items, removeItem, toggleComplete, changeItem }) => {
  return (
    <div className='Shopping-list'>
        {
            items && items.map(item => (
                <ListItem key={item.id} item={item} changeItem={changeItem} removeItem={removeItem} toggleComplete={toggleComplete}/>
            ))
        }

        {/* {
          items &&
            items.map(item => !item.completed && (
              <ListItem key={item.id} item={item} removeItem={removeItem} toggleComplete={toggleComplete}/>
            ))
        }

        {
          items &&
            items.map(item => item.completed && (
              <ListItem key={item.id} item={item} removeItem={removeItem} toggleComplete={toggleComplete}/>
            ))
        } */}
    </div>
  )
}

export default ShoppingList