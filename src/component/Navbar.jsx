import React, { useEffect, useState } from "react";
import { NavLink,useHistory } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import { Islogged } from "../redux/action";

const Navbar = () => {
  const history=useHistory()
  const dispatch=useDispatch();
  

  let isLogged =sessionStorage.getItem("isLoggedIn");
  if(isLogged==='undefined'){
    isLogged=false
  }else{
    isLogged=JSON.parse(isLogged)
  }
  console.log("log 1",isLogged);
  const state = useSelector((state) => state.handleCart);
  const Twobutton = () => {
    return (
      <>
        <div className="buttons">
          <NavLink to="/login" className="btn btn-outline-dark">
            <i className="fa fa-sign-in me-1"></i> Login
          </NavLink>
          <NavLink to="/register" className="btn btn-outline-dark ms-2">
            <i className="fa fa-user-plus me-1"></i> Register
          </NavLink>
          <NavLink to="/cart" className="btn btn-outline-dark ms-2">
            <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})
          </NavLink>
        </div>
      </>
    );
  };
  const [user,setuser]=useState(localStorage.getItem("name"))
  useEffect(()=>{
  setuser(localStorage.getItem("name"))
  },user)
  
  const Onebutton = () => {
    return( <div className="buttons">
      <span> Hi:{user} </span>
      <div onClick={()=>{

        dispatch(Islogged(false))
        history.push('/login')
        
      }} className="btn btn-outline-dark ms-2">
            
      <i className="fa fa-sign-out me-1" ></i> logout</div>
          <NavLink to="/cart" className="btn btn-outline-dark ms-2">
            <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})
          
          </NavLink>
      
         
        </div>
     )
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            LA COLLECTION
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            {console.log("islogged",isLogged)}
            {isLogged ? <Onebutton /> : <Twobutton />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
