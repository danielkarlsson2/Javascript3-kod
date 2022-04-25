import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

const Navbar = ({title}) => {

  const { isAuthenticated } = useContext(AuthContext)


  return (
    <nav className='navbar'>
        <div className="container d-flex">
            <Link to="/"><h1>{title}</h1></Link>
            <ul className='d-flex'>
                <li><NavLink to="/admin">Admin</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </div>

    </nav>
  )
}

export default Navbar