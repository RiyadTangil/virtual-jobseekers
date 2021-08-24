import React from 'react';

const Skill = ({users}) => {
    return (
        <div>
        <div style={{ height: "300px" }} class="card my-3 shadow-lg ">
            <div class="card-header d-flex justify-content-between">
                <h2>SKill set</h2>
                <button type="button" class="btn btn-danger">Edit</button>
            </div>
            <div class="row g-0">

                <div >
                    <div class="card-body   d-flex justify-content-around">
                        <div>

                            <label for="exampleInputEmail1" class="form-label text-info">Skill-1</label>
                            <h5 class="card-title">{users.skillOne}</h5>
                        </div>
                        <div>

                            <label for="exampleInputEmail1" class="form-label text-info">SKill-2</label>
                            <h5 class="card-title">{users.skillTwo}</h5>
                        </div>
                        <div>

                            <label for="exampleInputEmail1" class="form-label text-info">SKill-3</label>
                            <h5 class="card-title">{users.skillThreeskillOne}</h5>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Skill;