<nav className="navbar navbar-expand-lg navbar-light bg-white">
<div className="container-fluid">
    <img className="navbar-brand " src={whole} />
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto flex justify-content-evenly mb-2 mb-lg-0 space-between">
      
      
      <li className="nav-item">
      <form className="d-flex">
      <input className="form-control rounded bg-gray me-2" type="search" placeholder="Search for your favorite groups in ATG" aria-label="Search"/>
    </form>
      </li>
     
      <li className="nav-item dropdown flex flex-row">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Create account  It’s free! 
        </a>
        {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><hr className="dropdown-divider"/></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul> */}
      </li>
    </ul>
  
  </div>
</div>
</nav>