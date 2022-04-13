import { useState, useEffect } from 'react'
import TodoItem from './TodoItem'
import axios from 'axios'

const TodoList = () => {

  const [todos, setTodos] = useState([])
  const [url, setUrl] = useState('http://localhost:8080/todos')

  // axios.get('http://localhost:8080/todos')
  //     // .then(res => console.log(res.data))
  //     .then(res => {
  //       console.log('data: ', res.data)
  //       setTodos(res.data)
  //     })

  useEffect(() => {
    axios.get(url)
      .then(res => {
        console.log('data')
        setTodos(res.data)
      })
  }, [])

  return (
    <div className='container todo-list'>
      {
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      }


      <button className='btn mr'>All users</button>
      <button className='btn'>user 1</button>
    </div>
  )
}

export default TodoList