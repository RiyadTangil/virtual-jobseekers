import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../../App';
import jwt_decode from "jwt-decode";

const PrivetRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const isLoggedIn = () => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            return false;
        }
        const decodedToken = jwt_decode(token);
    
        const { name, email, picture } = decodedToken;
        const signedInUser = { name: name, email: email, img: picture }
        setLoggedInUser(signedInUser)
     
 
        const currentTime = new Date().getTime() / 1000;

  
        return decodedToken.exp > currentTime;
      
    }


    // useEffect(()=>{
    //     const token = sessionStorage.getItem('token');
    //     if (!token) {
    //         return false;
    //     }
    //     const decodedToken = jwt_decode(token);
    
    //     const { name, email, picture,phoneNumber } = decodedToken;
    //     const signedInUser = { name: name, email: email, img: picture,phoneNumber:phoneNumber }
    //     console.log(signedInUser);
    //     setLoggedInUser(signedInUser)
     
    // },[])

 console.log(loggedInUser);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email||loggedInUser.phoneNumber ||isLoggedIn() ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivetRoute;