import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css'
import video from "./video.mp4"
const HeroSection = () => {
    return (
        <div class="hero-video-container ">
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
                <button className="btn btn-danger px-5 mx-2">
                    <Link to="/employeeForm"> Apply for job</Link>
                </button>

            </div>
        </div>
    );
};

export default HeroSection;