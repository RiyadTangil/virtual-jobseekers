import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import whiteYOY from "../../../images/white.png"
import hotel from "../../../images/hotel.png"
const Footer = () => {
    const noNamed = [
        { name: "Tax", link: "/emergency" },
        { name: "Book keeping", link: "/checkup" },
        { name: "Accountent", link: "/personal-treatment" },
        { name: "QuickBOOk online", link: "/tooth-extract" },
        { name: "Balance Sheet", link: "/checkup" },
        { name: "Balance Sheet", link: "/checkup" },
        { name: "Balance Sheet", link: "/checkup" },
    ]
    const ourAddress = [
        // { name: "New York - 101010 Hudson", link: "//google.com/map" },
        // { name: "Yards", link: "//google.com/map" },

    ]
    const oralHealth = [
        { name: "Tax", link: "/emergency" },
        { name: "Book keeping", link: "/checkup" },
        { name: "Accountent", link: "/personal-treatment" },
        { name: "QuickBOOk online", link: "/tooth-extract" },
        { name: "Balance Sheet", link: "/checkup" },
        { name: "Balance Sheet", link: "/checkup" },
        { name: "Balance Sheet", link: "/checkup" }
    ]
    const services = [
        { name: "Tax", link: "/emergency" },
        { name: "Book keeping", link: "/checkup" },
        { name: "Accountent", link: "/personal-treatment" },
        { name: "QuickBOOk online", link: "/tooth-extract" },
        { name: "Balance Sheet", link: "/checkup" },
        { name: "Balance Sheet", link: "/checkup" },
        { name: "Balance Sheet", link: "/checkup" }
    ]
    const servicesTwo = [
        { name: "Tax", link: "/emergency" },
        { name: "Book keeping", link: "/checkup" },
        { name: "Accountent", link: "/personal-treatment" },
        { name: "QuickBOOk online", link: "/tooth-extract" },
        { name: "Balance Sheet", link: "/checkup" },
        { name: "Balance Sheet", link: "/checkup" },
        { name: "Balance Sheet", link: "/checkup" }
    ]
    const servicesThree = [
        { name: "Tax", link: "/emergency" },
        { name: "Book keeping", link: "/checkup" },
        { name: "Accountent", link: "/personal-treatment" },
        { name: "QuickBOOk online", link: "/tooth-extract" },
        { name: "Balance Sheet", link: "/checkup" },
        { name: "Balance Sheet", link: "/checkup" },
        { name: "Balance Sheet", link: "/checkup" }
    ]
    const pages = [
        { name: "About us", link: "/emergency" },
        { name: "Teams / Careers", link: "/checkup" },
        { name: "Blogs", link: "/personal-treatment" },
        { name: "Support", link: "/tooth-extract" }
      
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="pt-5">
                <div className="container">
                    <div className="row">
                        <div className="d-flex align-items-center col-md-10">
                            <img src={whiteYOY} class="img-fluid" alt="..."></img>
                            <h5 className="fw-bold text-light me-2">The World's Fastest Growing Hotel Chain</h5>
                            <h5 className="fw-bold text-light mx-2">Join our network and grow your business!</h5>
                        </div>
                        <div className="footer-btn col-md-2">
                            <button type="button" class="btn btn-light "><span><i class="fa fa-building">&nbsp;</i></span> List your company</button>
                        </div>
                    </div>

                </div>
                <hr className="footer-divider" />
                <div className="container ">
                    <div className="row">
                        <div className="col-md-4 footer-horizontal-line">
                        </div>
                        <div className="col-md-4 footer-horizontal-line">
                        <div className="row">
                        <FooterCol key={4} pages={true}  menuItems={pages} />
                        <FooterCol key={4}  pages={true}  menuItems={pages} />
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="row">
                      
                        <FooterCol key={4} police={true}   menuItems={pages} />
                        </div>
                        </div>
                    </div>
                    <hr className="footer-divider" />
                    <div className="d-flex py-3 justify-content-between text-light text-center">
                        <div >
                            <h5>OYO TownHouse</h5>
                            <p>your friendly neighborhood hotel</p>
                        </div>
                        <div >
                            <h5>OYO TownHouse</h5>
                            <p>your friendly neighborhood hotel</p>
                        </div>
                        <div >
                            <h5>OYO TownHouse</h5>
                            <p>your friendly neighborhood hotel</p>
                        </div>
                    </div>
                    <hr className="footer-divider" />


                    <div className="row py-5">
                        <h5 className='fw-bold text-light'>OYO Hotels</h5>
                        <FooterCol key={1} menuTitle="accountant"   menuItems={noNamed} />
                        <FooterCol key={2} menuTitle="Services"   menuItems={services} />
                        <FooterCol key={3} menuTitle="Our Consultant"   menuItems={oralHealth} />
                        <FooterCol key={4} menuTitle="Our Consultant"   menuItems={servicesTwo} />
                        <FooterCol key={5} menuTitle="Our Consultant"   menuItems={servicesThree} />
                        <FooterCol key={5} menuTitle="Our Consultant"   menuItems={servicesThree} />
                        <hr className="footer-divider  my-3" />
                        <div className="d-flex justify-content-between">
                            <ul className="social-media list-inline ">
                                <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>


                                <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                                <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                                <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                                <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                            </ul>
                            <div className="copyRight text-center">
                                <p className="text-light">Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </footer>

    );
};

export default Footer;