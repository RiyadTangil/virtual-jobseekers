import React from 'react';

const Country = ({countries}) => {
    return (
        <div className="d-flex col-md-4 py-2 " >
            <p className="px-3" >
                <span style={{backgroundColor:`${countries.bg}`}} className="badge  rounded-circle  p-1"><span class="visually-hidden"></span></span>
            </p>
            <h5>{countries.name}</h5>
        </div>
    );
};

export default Country;