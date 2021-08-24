import React from 'react';

const ApplyJob = () => {
    return (
        <div>
        <div>
       <div style={{ height: "300px" }} class="card my-3 shadow-lg ">
           <div class="card-header d-flex justify-content-between">
               <h2>Applied for Job </h2>
               <button type="button" class="btn btn-danger">Edit</button>
           </div>
           <div class="row g-0">

               <div >
                   <div class="card-body  text-warning ">
                      <h3>No job  to apply  yet</h3>

                   </div>
               </div>
           </div>
       </div>
   </div>
   </div>
    );
};

export default ApplyJob;