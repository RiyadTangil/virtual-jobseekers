import React from 'react';
import flam from "../../images/flame.png"
import "./NewsLetter.css"

const NewsLetter = () => {
    return (
        <div class="container border border-muted  my-4 rounded-3">
            <div class=" newsLetterContainer  row pt-4 pb-2">
                <div className="col-md-6 d-flex justify-content-start ">
                    <div class=" w-25">
                        <img src={flam} class="img-fluid w-" alt="..."></img>
                    </div>
                    <div>
                        <h5 class="fw-bold">Get access to exclusive deals <br />
                        </h5>
                        <h6 class="text-muted ">Only the best deals reach your inbox</h6>


                    </div>
                </div>
                <div className="col-md-6  ">
               
                   <form class="row g-3 ">
                   
                            <div class="col-md-8">
                                <label for="inputPassword2" class="visually-hidden">Password</label>
                                <input type="text" class="form-control"  placeholder="e,g jhon@gmail.com"></input>
                            </div>
                            <div class="col-md-4">
                                <button  class="btn btn-danger notify-btn mb-3">Notify me</button>
                            </div>
                       
                    </form>
              

                </div>
            </div>
        </div>
    );
};

export default NewsLetter;