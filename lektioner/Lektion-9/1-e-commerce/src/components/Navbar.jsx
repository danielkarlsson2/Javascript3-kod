import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    // <!-- Navbar -->
        <nav className="navbar navbar-expand-md navbar-light bg-info">
        {/* <!-- Container wrapper --> */}
        <div className="container-fluid">
            <Link to="/" className='navbar-brand'>ShopShop</Link>

            {/* <!-- Toggle button --> */}
            <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <i className="fas fa-bars"></i>
            </button>

            {/* <!-- Collapsible wrapper --> */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!-- Navbar brand --> */}
            
            {/* <!-- Left links --> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/products">Products</NavLink>
                </li>
               
            </ul>
            {/* <!-- Left links --> */}
            </div>
            {/* <!-- Collapsible wrapper --> */}

            {/* <!-- Right elements --> */}
            <div className="d-flex align-items-center">
            {/* <!-- Icon --> */}
            {/* <a className="text-reset me-3" href="!#">
                <i className="fas fa-shopping-cart"></i>
            </a> */}

            {/* <!-- Notifications --> */}
            <div className="dropdown">
                <a
                className="text-reset me-3 dropdown-toggle hidden-arrow"
                href="!#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
                >
                <i className="fas fa-shopping-cart"></i>
                <span className="badge rounded-pill badge-notification bg-danger">1</span>
                </a>
                <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
                >
                    Shoppingcart
                </ul>
            </div>
            {/* <!-- Avatar --> */}
           
            </div>
            {/* <!-- Right elements --> */}
        </div>
        {/* <!-- Container wrapper --> */}
</nav>
// <!-- Navbar -->
  )
}

export default Navbar