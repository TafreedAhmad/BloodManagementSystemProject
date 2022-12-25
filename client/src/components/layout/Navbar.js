import React from "react";
import bdrop from "../../assets/img/bdrop.png";
import SearchPage from "./SearchPage";

import "../../assets/css/Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      {/* <!-- Container wrapper --> */}
      <div class="container-fluid">
        {/* <!-- Navbar brand --> */}
        <a class="navbar-brand" href="/home">Blood Managment</a>

        {/* <!-- Toggle button --> */}
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        {/* <!-- Collapsible wrapper --> */}
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <!-- Left links --> */}
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login/usr">Donate/Request</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login/usr">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login/emp">Employee</a>
            </li>
            {/* <!-- Navbar dropdown --> */}
            <li class="nav-item dropdown">
              
              {/* <!-- Dropdown menu --> */}
              
            </li>
           
          </ul>
          {/* <!-- Left links --> */}
        </div>
        {/* <!-- Collapsible wrapper --> */}
      </div>
      {/* <!-- Container wrapper --> */}
    </nav>
    );
  };
  
  export default Navbar;
  
  // <nav className="nav">
  //   <a href="/home">
  //     <img src={bdrop} alt="bdroplogo" />
  //   </a>
  //   <a href="/donate">DONATE/REQUEST</a>
  //   {/* <Search /> */}
  //   <SearchPage />
  // </nav>