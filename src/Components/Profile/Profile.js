import React from 'react';
import profileImg from "../../images/man.png"

const Profile = ({ users }) => {
   
    return (
        <div>
            <div style={{ height: "350px" }} class="card my-3 shadow-lg ">

                <div class="card-header d-flex justify-content-between">
                    <h2>My profile</h2>
                    <button type="button" class="btn btn-danger">Edit</button>
                </div>
                <div class="row g-0">
                    <div class="col-md-3 d-flex justify-content-center align-items-center">
                        <img src={profileImg} style={{ width: "100px" }} class="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div class="col-md-8 d-flex justify-content-center">
                        <div class="card-body ">
                            <label for="exampleInputEmail1" class="form-label">Full Name</label>
                            <h5 class="card-title">{users.FirstName +" " + users.LastName }</h5>
                            <label for="exampleInputEmail1" class="form-label">Email Address</label>
                            <h5 class="card-title">{users.email || "test@email.com"}</h5>
                            <label for="exampleInputEmail1" class="form-label">Email Address</label>
                            <h5 class="card-title">{users.PhoneNumber || "+00000000000"}</h5>
                            <label for="exampleInputEmail1" class="form-label">AGE</label>
                            <h5 class="card-title">{users.age }</h5>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;