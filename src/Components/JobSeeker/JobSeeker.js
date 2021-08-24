import React from 'react';
import profileImg from "../../images/man.png"


const JobSeeker = ({user}) => {
 
   

    return (
        <div className="col-md-4 col-sm-6">
            <div class="card shadow-lg" >
            <div class=" d-flex pt-3 justify-content-center align-items-center">
                        <img src={profileImg} style={{ width: "100px" }} class="img-fluid rounded-start" alt="..."></img>
                    </div>
                <div class="card-body">
                    <h5 class="card-title">Name :  {user.FirstName +" " + user.LastName }</h5>
                  
                   
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item "> skill set: <span class="fw-bold">{user.skillOne },{user.skillTwo},{user.skillThree}</span> </li>
                    <li class="list-group-item">workFunction: <span class="fw-bold">{user.workFunction }</span> </li>
                    <li class="list-group-item">Last/current Organization: <span class="fw-bold">{user.LastOrCurrentOrganization }</span></li>
                    <li class="list-group-item">Job type: <span class="fw-bold">{user.JobType }</span></li>
                    <li class="list-group-item">Start date: <span class="fw-bold">{user.startDate.slice(0, 10) }</span></li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Hire me</a>
                    {/* <a href="#" class="card-link">Another link</a> */}
                </div>
            </div>
        </div>
    );
};

export default JobSeeker;