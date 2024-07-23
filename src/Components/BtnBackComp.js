import React, { Fragment, useEffect, useState } from 'react'
import { GoMoveToTop } from 'react-icons/go'

const BtnBackComp = () => {
  const [Show,setShow]=useState();
  const [ShowBtn,setShowBtn]=useState();
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      setShowBtn(window.scrollY);
      setShow(window.scrollY);
    });
  })
 
  const [ShowLoader,setShowLoader] =useState();
  const ShowBtnBack=()=>{
    setShowLoader(true);
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
  return (
  <Fragment>
    <div onClick={ShowBtnBack} style={ShowBtn >300 ?{opacity:"1"}:{opacity:"0"}} className="BtnBack" >
    <GoMoveToTop />
    </div>
    <div style={Show <= 300  ? {display:"none"}:{display:""}} onClick={ShowBtnBack} className={ ShowLoader? "BtnLoader":""}>
    <span  className="loader"></span>
    </div>
  </Fragment>
  )
}

export default BtnBackComp
