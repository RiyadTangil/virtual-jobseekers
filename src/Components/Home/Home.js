import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import JobSeekers from '../JobSeekers/JobSeekers';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <JobSeekers></JobSeekers>
        </div>
    );
};

export default Home;