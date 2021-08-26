import React from 'react';
import profileImg from "../../images/man.png"


const JobSeeker = ({ user }) => {



    return (
        <div className="col-md-4 col-sm-6">
            {/* style={{backgroundColor:"#FDF6F4"}} */}
            <div  class="card my-2 rounded-3 shadow-lg" >
                <div class=" d-flex pt-3 justify-content-center align-items-center">
                    <img src={profileImg} style={{ width: "100px" }} class="img-fluid rounded-start" alt="..."></img>
                </div>
                <div class="card-body">
                <h5 class="card-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, sint!</h5>


                </div>
                <ul class="list-group list-group-flush">
                    
                    <li class="list-group-item "> <span class="fw-bold  bg-secondary mx-1 rounded-3 text-light">{user.skillOne} </span> <span class="fw-bold  bg-secondary mx-1 rounded-3 text-light">{user.skillTwo}</span><span class="fw-bold  bg-secondary mx-1 rounded-3 text-light"> {user.skillThree}</span> </li>
                    <li class="list-group-item">workFunction: <span class="fw-bold">{user.workFunction}</span> </li>
                    <li class="list-group-item">Last/current Organization: <span class="fw-bold">{user.LastOrCurrentOrganization}</span></li>
                    <li class="list-group-item">Job type: <span class="fw-bold">{user.JobType}</span></li>
                    {/* <li class="list-group-item">Start date: <span class="fw-bold">{user.startDate.slice(0, 10) }</span></li> */}
                </ul>
                <div class="card-body d-flex justify-content-between">
                <p class="list-group-item">by : <span class="fw-bold">  {user.FirstName + " " + user.LastName}</span></p>
                    <a href="#" class="card-link">Hire me</a>
                    {/* <a href="#" class="card-link">Another link</a> */}
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last delivery 3 mins ago</small>
                </div>
            </div>
        </div>
    );
};

export default JobSeeker;