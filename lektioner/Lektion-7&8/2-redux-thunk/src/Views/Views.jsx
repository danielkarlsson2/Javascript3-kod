import React from 'react'
import { Routes, Route} from 'react-router-dom'
import NewsView from './NewsView'

const Views = () => {
  return (
    <Routes>
        <Route path='/' element={ <NewsView />} />
    </Routes>
  )
}

export default Views