import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/User.jsx';

export default function Navbar() {
  let {userToken,setUserToken,userData,setUserData} =useContext(UserContext);
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.removeItem("userToken");
    setUserToken(null);
    setUserData(null);
    navigate('/');
  }
  return (
    <nav className="navbar navbar-expand-lg  mb-1 navbar-dark p-3 " style={{backgroundColor: '#1B1464'}}>
      <div className="container ">
  <a className="navbar-brand" href="#">T-shop</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555" aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Categories</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Products</a>
      </li>

         {userToken?<li className="nav-item">
          <Link className="nav-link" to="/cart">Cart</Link>
        </li>
        :null}

    </ul>
    <ul className="navbar-nav ms-auto ">
  <li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" 
  href="#" 
  role="button" 
  data-bs-toggle="dropdown" 
  aria-expanded="false">
   {userData!=null?userData.userName:'Account'}  
  </a>
  <ul className="dropdown-menu ">

    {userToken==null?<>
      <li><Link className="dropdown-item" to="/register">register</Link></li>
     <li><hr className="dropdown-divider" /></li>
     <li><Link className="dropdown-item" to="/login">login</Link></li>
    </>
    
  :<>
  <li><Link className="dropdown-item" to="/register">profile</Link></li>
    <li><hr className="dropdown-divider" /></li>
    <li><Link className="dropdown-item" onClick={logout}>logout</Link></li>
  </>}
     
    
    
     
    
    
    </ul>
    </li>
 
  
    <ul className="navbar-nav  nav-flex-icons ms-3">
      <li className="nav-item avatar">
        <a className="nav-link p-0" href="#">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp" className="rounded-circle z-depth-0" alt="avatar image" height={35} />
        </a>
      </li>
    </ul>
     </ul>
</div>
</div>
</nav>
    



  )
}
