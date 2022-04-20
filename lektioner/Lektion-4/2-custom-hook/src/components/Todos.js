import { useState, useRef } from 'react'
import { useFetch } from '../hooks/useFetch'

const Todos = () => {

    const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos')
    const { data, loading, error } = useFetch({method: 'GET', url: 'https://jsonplaceholder.typicode.com/todos'})
    


  return (
      <div className='todo-list'>

        <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos')}>All users</button>
        <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos?userId=1')}>User 1</button>
        <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos?userId=2')}>User 2</button>
        <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos?userId=3')}>User 3</button>
        <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos?userId=4')}>User 4</button>

        {loading && <p>Loading...</p>}
        {error && <p>{ error }</p>}

          { data && 
              data.map(todo => (
                  <div className='todo' key={todo.id}>
                      <p className='small'>User id: { todo.userId }</p>
                      <p>{ todo.title }</p>
      
                  </div>
              ))
          }

      </div>
  )
}

export default Todos