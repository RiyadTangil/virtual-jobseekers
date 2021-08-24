import React, { useState, useEffect } from 'react';
import JobSeeker from '../JobSeeker/JobSeeker';
import toast from 'react-hot-toast';

const JobSeekers = () => {
    const [users, setUsers] = useState([])
    const [search, setsearch] = useState(" ")
    useEffect(() => {
        fetch("https://still-brook-02175.herokuapp.com/jobseekers")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    const handleSearch = e => {
        const loading = toast.loading('searching. Please wait...!');
        e.preventDefault()
        fetch('https://still-brook-02175.herokuapp.com/searchedJob?search=' + search)
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                toast.dismiss(loading);
            })


    }
    return (
        <div id="service" className="d-flex justify-content-center mt-5">
            <div className="w-75 row   ">
                <form onSubmit={handleSearch} class="d-flex justify-content-center  my-5">
                    <input class="form-control me-2 w-25" onBlur={(e) => setsearch(e.target.value)} type="search" name="search" placeholder="Search by location" aria-label="Search"></input>
                    <button class="btn btn-outline-success " type="submit">Search</button>
                </form>

                {
                    users.map(user => <JobSeeker user={user} key={user._id}></JobSeeker>)
                }
            </div>
        </div>
    );
};

export default JobSeekers;