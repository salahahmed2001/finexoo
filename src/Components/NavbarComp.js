import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch,FaUserAlt  } from "react-icons/fa";

const NavbarComp = () => {
  const [Show,setShow] = useState()
  useEffect(()=>{
    window.addEventListener("resize",(e)=>{
     const windowSize =e.currentTarget.innerWidth;
     setShow(windowSize)
    })
    
  })
  const [isActive,setIsActive] =useState(false);
  function AddClass() {
    setIsActive(! isActive);
  }
  const addNewClass =(navbarToggler,navbarTogglerRotate,navbar,navbarActive)=>{
    return `${navbarToggler} ${navbarTogglerRotate} ${navbar} ${navbarActive}`;
  }
  return (
    <Fragment>
      <header className="header">
        <div className="logo-btn">
        <div className="logo">
          <h1>Finexo</h1>
        </div>
          <button
            style={Show < 992 ?{display:'flex'}:{display:'none'} }
            className={addNewClass("navbarToggler",isActive ? "navbarTogglerRotate":"")}
            onClick={AddClass}
          >
            <span></span>
          </button>
        </div>
        <div className={addNewClass("navbar",isActive ? "navbarActive":"")} >
          <ul>
            <li>
              <NavLink to="">HOME</NavLink>
            </li>
            <li>
              <NavLink to="About">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="Services">SERVICES</NavLink>
            </li>
            <li>
              <NavLink to="WhyUs">WHY US</NavLink>
            </li>
            <li>
              <NavLink to="Team">TEAM</NavLink>
            </li>
            <li> <FaUserAlt />LOGIN</li>
            <li><FaSearch /></li>
          </ul>
        </div>
      </header>
    </Fragment>
  );
};

export default NavbarComp;
