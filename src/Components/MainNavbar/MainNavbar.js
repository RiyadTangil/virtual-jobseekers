import React from 'react';
import "./MainNav.css";
import logo from '../../images/red.png'

const MainNavbar = () => {
    return (
      
    //     <div class="navbar navbar-expand-lg navbar-light bg-light p-0 m-0 ">
    //         <div class="container-fluid ">

    //             <div class="collapse navbar-collapse row g-0 d-flex justify-content-center" id="navbarSupportedContent">

    //                 <div class="d-flex search-location col-md-5 p-0 m-0">
    //                     <input class="form-control " type="search" placeholder="Search" aria-label="Search"></input>
    //                     {/* <button class="btn btn-success" >Near me</button> */}
    //                 </div>

    //                 <ul class="navbar-nav  col-md-5">


    //                     <li class="nav-item">
    //                         <a class="nav-link p-3" href="#">1 Room , 2 Guests</a>
    //                     </li>
    //                     <li class="nav-item  ">
    //                         <a class="nav-link p-3" href="#">Tus ,9 sep - Fri ,10 Sep</a>
    //                     </li>



    //                 </ul>
    //                 <div class="d-flex p-0 m-0   col-md-2">

    //                     <button class="btn btn-success search-btn p-3 " type="submit">Search</button>
    //                 </div>

    //             </div>


          
    //     </div>
    // </div>


    <nav class="navbar header-nav navbar-expand-lg navbar-dark bg-white">
  <div class="container-fluid mx-2">
    <a class="navbar-brand" href="#"><img src={logo} alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav ms-auto">
      <li class="nav-item dropdown">
       
       <a class="nav-link" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
       <i class="fab fa-wordpress">&nbsp;</i>   Become a member<br/><span className="text-muted fs-6">additional 30 days off</span>
       </a>
     
     </li>
        <li class="nav-item dropdown">
       
          <a class="nav-link" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa fa-building">&nbsp;</i>   List your property <br/><span className="text-muted fs-6">start earning in 30 minute</span>
          </a>
        
        </li>
        <li class="nav-item ">
       
          <a class="nav-link" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa fa-globe">&nbsp;</i>  English  <i class="fa fa-chevron-down">&nbsp;</i> 
          </a>
        
        </li>
        <li class="nav-item">
       
          <a class="nav-link" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa fa-user">&nbsp;</i>   Login/Signin
          </a>
        
        </li>   
      </ul>
    </div>
  </div>
</nav>
  
    );
};

export default MainNavbar;