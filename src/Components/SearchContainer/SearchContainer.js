import React from 'react';
import "./SearchContainer.css"
import hotel from '../../images/hotel.png'

const SearchContainer = () => {
    return (
        <div class="searchContainer">
            {/* <span><img src={hotel}></img></span>
            <span><img src={hotel}></img></span> */}
            <h2 class="text-center text-light fw-bold pt-3">World's Fastest Growing Hotel Chain</h2>
            <div className="d-flex justify-content-center  pt-3 pb-4">
                <div class="navbar navbar-expand-lg navbar-light bg-light p-0 m-0  w-75">
                    <div class="container-fluid  p-0 m-0">

                        <div class="collapse navbar-collapse row g-0 d-flex justify-content-center" id="navbarSupportedContent">

                            <div class="d-flex search-location col-md-5 p-0 m-0">
                                <input class="form-control " type="search" placeholder="Search" aria-label="Search"></input>
                                {/* <button class="btn btn-success" >Near me</button> */}
                            </div>

                            <ul class="navbar-nav  col-md-5">


                                <li class="nav-item">
                                    <a class="nav-link p-3" href="#">1 Room , 2 Guests</a>
                                </li>
                                <li class="nav-item  ">
                                    <a class="nav-link p-3" href="#">Tus ,9 sep - Fri ,10 Sep</a>
                                </li>



                            </ul>
                            <div style={{backgroundColor: "#1AB64F"}} class="d-flex p-0 m-0   col-md-2">

                                <button class="btn btn-success search-btn p-3 " type="submit">Search</button>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 d-flex align-items-center">
                    <p class="text-light pt-3 fw-bold">Continue your search</p>

                    <button type="button" class="btn mx-3 btn-outline-secondary btn-lg text-light">Bangalore· Guests</button>

                </div>

            </div>
        </div>
    );
};

export default SearchContainer;