import React from 'react';
import BannerCardImage from '../BannerCardImage/BannerCardImage';
import CMSContainer from '../CMSContainer/CMSContainer';
import Footer from '../Footer/Footer/Footer';
import MainNavbar from '../MainNavbar/MainNavbar';

import Navbar from '../Navbar/Navbar';
import NewsLetter from '../NewsLetter/NewsLetter';
import SearchContainer from '../SearchContainer/SearchContainer';


const Home = () => {
    return (
        <div>
             <MainNavbar></MainNavbar>
            <Navbar></Navbar>
           
            <SearchContainer></SearchContainer>
            <BannerCardImage></BannerCardImage>
            <NewsLetter></NewsLetter>
            <CMSContainer></CMSContainer>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;