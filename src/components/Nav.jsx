import React from 'react'
import whole from '../assets/whole.png'
import "./index.css"
import search from "../assets/search.png"
const Nav = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
<div className="container-fluid">
    <img className="navbar-brand py-3 px-5  "  src={whole} />
  {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mx-5 flex justify-content-evenly w-100% mb-2 mb-lg-0 space-between">
      
      
      <li className="nav-item mx-5 text-center justify-content-center" style={{ width: "25rem", 
      border: "none"
      
      }}>
      <form className="search d-flex form-control  bg-gray w-100 text-small  me-2" 
       style={{  fontWeight: "800", fontSize: "2rem", background: "#F2F2F2", borderRadius: "2rem"}}>
      <img className="navbar-brand " style={{ height: "2.2rem", width: "2rem"}} src={search} />
      <input 
      style={{border: "none",  background: "#F2F2F2",}}
      
      className="form-control border-none" type="search" placeholder="Search for your favorite groups in ATG" aria-label="Search"/>
    </form>
      </li>
     
      <li className="nav-item dropdown " style={{  fontWeight: "400"}}>
      
          <a className="nav-link ms-5 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          
          Create account. It’s free!
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      {/* <li className="nav-item dropdown d-flex flex-row ">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <p className=''> Create account</p> <p className=''  style={{ color: "#2F6CE5"}}> It’s free!</p>  
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><hr className="dropdown-divider"/></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li> */}
    </ul>
  
  </div>
</div>
</nav>
   
    </div>
  )
}

export default Nav