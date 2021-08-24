import React from 'react';
import { useContext,useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './HeroSection.css'
import video from "./video.mp4"
const HeroSection = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const[oldUser,serOldUser]=useState(null)
    useEffect(() => {
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
        <div class="hero-video-container  ">
            <video
                loop="true"
                muted="true"
                autoplay="true"
                preload="auto"
            >
                <source src={video} type="video/mp4" />
                Your video does not support  the video tag
            </video>
            <div class="caption  d-flex">
                <button className="btn btn-info mx-2 px-5">Hire a Employee</button>
                <button className="btn btn-danger px-5  mx-2">
                    <Link class="text-decoration-none text-light" to={oldUser?"/dashboard":"/employeeForm"}> Apply for job</Link>
                </button>

            </div>
        </div>
    );
};

export default HeroSection;