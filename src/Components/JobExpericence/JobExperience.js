import React from 'react';

const JobExperience = ({ users }) => {
    return (
        <div>
            <div style={{ height: "300px" }} class="card my-3 shadow-lg ">
                <div class="card-header d-flex justify-content-between">
                    <h2>Job Experience</h2>
                    <button type="button" class="btn btn-danger">Edit</button>
                </div>
                <div class="row g-0">

                    <div >
                        <div class="card-body  c  d-flex justify-content-center">
                            <div className="col-md-6">
                                <div>

                                    <label for="exampleInputEmail1" class="form-label text-info">Last Or CurrentOrganization</label>
                                    <h5 class="card-title">{users.LastOrCurrentOrganization}</h5>
                                </div>
                                <div>

                                    <label for="exampleInputEmail1" class="form-label text-info">Compensation</label>
                                    <h5 class="card-title">{users.Compensation}</h5>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>

                                    <label for="exampleInputEmail1" class="form-label text-info">JobType-3</label>
                                    <h5 class="card-title">{users.JobType}</h5>
                                </div>
                                <div>

                                    <label for="exampleInputEmail1" class="form-label text-info">WillReturn</label>
                                    <h5 class="card-title">{users.WillReturn}</h5>
                                </div>

                            </div>
                            
                            



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobExperience;