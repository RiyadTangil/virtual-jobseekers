import React from 'react';

const Address = ({ users }) => {
    return (
        <div>
            <div style={{ height: "300px" }} class="card my-3 shadow-lg ">
                <div class="card-header d-flex justify-content-between">
                    <h2>My address</h2>
                    <button type="button" class="btn btn-danger">Edit</button>
                </div>
                <div class="row g-0">

                    <div >
                        <div class="card-body   d-flex justify-content-around">
                            <div>

                                <label for="exampleInputEmail1" class="form-label text-info">Present Address</label>
                                <h5 class="card-title">{users.location}</h5>
                            </div>
                            <div>

                                <label for="exampleInputEmail1" class="form-label text-info">Permanent  Address</label>
                                <h5 class="card-title">{users.location}</h5>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Address;