import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import "./Navbar.css"

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (

        <nav class="navbar navbar-container navbar-expand-lg navbar-light bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-items   navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav  ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#"><Link to="/">Home</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#service">Service</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"><Link to="/dashboard">Dashboard</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" ><Link to="/login">Login</Link></a>
                        </li>
                        {loggedInUser.phoneNumber}

                    </ul>

                </div>
            </div>
        </nav>

    );
};

export default Navbar;