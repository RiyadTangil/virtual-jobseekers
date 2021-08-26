import React, { useContext ,useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import "./Navbar.css"
import jwt_decode from "jwt-decode";

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const[oldUser,serOldUser]=useState(null)
    useEffect(() => {
        const token = sessionStorage.getItem('token');

        if (!token) {
            return false;
        }

        const decodedToken = jwt_decode(token);
        const { name, email, picture } = decodedToken;
        const newSignedInUser = { name: name, email: email, img: picture }
        setLoggedInUser(newSignedInUser)
        fetch("https://still-brook-02175.herokuapp.com/jobseekers")
            .then(res => res.json())
            .then(data => {
                const userWithEmail = data.find(user => user.email === loggedInUser.email)
                const userWithPhone = data.find(user => user.PhoneNumber === loggedInUser.PhoneNumber)
              
          if(userWithEmail){
            serOldUser(userWithEmail)
   
          }
          else if(userWithPhone){
            serOldUser(userWithPhone)
   
          }

            })

    }, [])


   

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
                        {loggedInUser.email ?
                        <li class="nav-item">
                        <a class="nav-link"><Link to="/dashboardManager">profile</Link></a>
                    </li>:
                     <li class="nav-item">
                     <a class="nav-link" ><Link to="/login">Login</Link></a>
                 </li>}
                        
                       
                   

                    </ul>

                </div>
            </div>
        </nav>

    );
};

export default Navbar;