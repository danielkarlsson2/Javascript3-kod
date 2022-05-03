import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'

const Navbar = () => {

 const { toggleTheme } = useContext(ThemeContext)

  return (
    <nav className='navbar'>
      <div className="container">
        <Link to="/"><h1>My Blog</h1></Link>
        <ul className='nav-links'>
          <li><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'inactive')} to="/">Posts</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'inactive')} to="/create">New Post</NavLink></li>
          {/* <button className='btn btn-sm btn-dark' >Dark</button> */}
          <button className='btn btn-sm btn-dark' onClick={toggleTheme} style={{}}>Dark</button>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar