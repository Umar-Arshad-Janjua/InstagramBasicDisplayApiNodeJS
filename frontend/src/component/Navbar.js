import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../images/idenbrid.jpg'

const Navbar = () => {
  return (
   <>
   <nav className="navbar navbar-expand-lg bg-none">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"> <img className='img-fluid ms-3 me-4' style={{'height': 'auto', 'maxWidth': '3%'}} src={logo} alt="" />Instagram Basic Display API</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active fs-6 fw-light"  to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active fs-6 fw-light"  to="/displaydata">FEED</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active fs-6 fw-light"  to="/login">LOGIN</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active fs-6 fw-light"  to="/signup">REGISTER</Link>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar;