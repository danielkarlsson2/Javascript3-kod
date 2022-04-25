import { NavLink } from 'react-router-dom'

const Navbar = () => {



  return (
    <nav className='navbar'>

        <div className="container">
            <h1>Bloggen</h1>
            <ul className='nav-links'>
              <li><NavLink to='/' className='nav-link'>Home</NavLink></li>
              <li><NavLink to='/blogs' className='nav-link'>Blogs</NavLink></li>
              <li><NavLink to='/about' className='nav-link'>About</NavLink></li>
              
            </ul>
        </div>
    </nav>
  )
}

export default Navbar