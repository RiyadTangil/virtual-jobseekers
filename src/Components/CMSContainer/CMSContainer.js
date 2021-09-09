import React from 'react';
import Country from '../Country/Country';
import "./CMSContainer.css"
import countryMap from "../../images/country.PNG"

const CMSContainer = () => {

    const countryInfo = [
        { name: "India", bg: "green" },
        { name: "USA", bg: "green" },
        { name: "China", bg: "aqua" },
        { name: "Malaysia", bg: "navy" },
        { name: "Nepal", bg: "yellow" },
        { name: "Indonesia", bg: "olive" },

    ]

    return (
        <div style={{ backgroundColor: "#F3F5F7" }} className="py-5">
            <div class="container  ">
                <div class=" row ">
                    <div className="col-md-6 d-flex ">
                       
                    <img src={countryMap} class="img-fluid" alt="..."></img>
                    </div>
                    <div className="col-md-6  ">
                        <div>
                            <h4 class="fw-bold">World's leading chain of hotels and homes</h4>
                            <h6 className="text-muted py-3">More Destinations. More Ease. More Affordable.</h6>
                        </div>
                        <div className="hotel-aria d-flex py-3">
                            <div>
                                <h3 className=" p-0 m-0 fw-bold fw-bold">80 <br />  </h3>
                                <p><span className="text-muted fs-6 ">Country</span></p>

                            </div><hr />
                            <div>
                                <h3 className=" p-0 m-0 fw-bold">43000+ <br />  </h3>
                                <p><span className="text-muted fs-6 ">Hotels</span></p>

                            </div><hr />
                            <div>
                                <h3 className=" p-0 m-0 fw-bold">150,000 <br />  </h3>
                                <p><span className="text-muted fs-6 ">Vacation Homes</span></p>

                            </div><hr />
                        </div>
                        <div className=" row">

                            {countryInfo.map(country => <Country countries={country}></Country>)}


                        </div>




                    </div>

                </div>
            </div>
        </div>

    );
};

export default CMSContainer;