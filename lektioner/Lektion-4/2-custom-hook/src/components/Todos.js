import { useState } from 'react'

const Todos = () => {

    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'test',
            userId: '1',
            completed: false
        },
        {
            id: 2,
            title: 'test',
            userId: '2',
            completed: false
        }
    ])
  return (
      <div className='todo-list'>

        


          {
              todos.map(todo => (
                  <div className='todo'>
                      <p className='small'>User id: { todo.userId }</p>
                      <p>{ todo.title }</p>
      
                  </div>
              ))
          }

      </div>
  )
}

export default Todos