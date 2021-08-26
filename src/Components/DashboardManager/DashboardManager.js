import { useState, useContext, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { UserContext } from '../../App';
import { useHistory, useParams } from 'react-router-dom';
import JobSeekerForm from '../JobSeekerForm/JobSeekerForm';
import Dashborad from '../Dashboard/Dashborad';

const DashboardManager = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [loadData, setLoadData] = useState(null)
    const [oldUser, setOldUser] = useState(null)
    const history = useHistory();

        fetch("https://still-brook-02175.herokuapp.com/jobseekers")
            .then(res => res.json())
            .then(data => {
                const userWithEmail = data.find(user => user.email == loggedInUser.email)
                const userWithPhone = data.find(user => user.PhoneNumber == loggedInUser.PhoneNumber)

                if (userWithEmail) {
                    setOldUser(userWithEmail)
                    console.log(true);
                    setLoadData(true)

                }
                else if (userWithPhone) {
                    setOldUser(userWithPhone)
                    setLoadData(true)

                }
                else{
                    setLoadData(true)  
                }
            

            })

  
    return (
        <div>
            {loadData ?
                <div>
                    {oldUser ?
                        <Dashborad></Dashborad>
                        : <JobSeekerForm></JobSeekerForm>}
                </div>

                :<div className="d-flex justify-content-center mt-5 pt-5">
                     <div class="spinner-border d-flex ju" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                </div> 
               }


        </div>
    );
};

export default DashboardManager;