import React, { useContext, useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebase.config";

import { useHistory, useLocation } from "react-router-dom";

import { UserContext } from "../../../App";
import "./login.css"




const Login = (props) => {
    // const { setUser } = props;
    const [showOTPBtn, setShowOTPBtn] = useState(false)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [loginInfo, setLoginInfo] = useState({});
    let [newUser, setNewUser] = useState(false)
  

    const storeAuthToken = () => {
        firebase
            .auth()
            .currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem("token", idToken);


            })
            .catch(function (error) { });
    };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    // Phone sign in method
    let setUpRecapture = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {

                handlePhoneSignIn();
                console.log('recapture varified');
            },
            defaultCountry: "IN"
        });
    }
    let handlePhoneSignIn = (e) => {
        e.preventDefault()
        setUpRecapture()
        const phoneNumber = "+91" + e.target.mobileNumber.value;
        console.log(phoneNumber);
        const appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
               
               setShowOTPBtn(true)

                console.log(true);
            }).catch((error) => {
                let newUserInfo = { ...loggedInUser }
                newUserInfo.error = error.message;
                newUserInfo.success = false
                setLoggedInUser(newUserInfo)
                console.log(false);
                console.log(error.message);
            });
    }
    const handleOTPSubmit = (e) => {
        e.preventDefault()
        const code = e.target.OTPNumber.value;
        console.log(code);
        window.confirmationResult.confirm(code).then((result) => {
            const user = result.user;
            const { phoneNumber } = user

            let newUserInfo = { phoneNumber: phoneNumber }
            newUserInfo.error = ''
            newUserInfo.success = true
            setLoggedInUser(newUserInfo)
            history.replace(from);
           setShowOTPBtn(false)
        }).catch((error) => {
            let newUserInfo = { ...loggedInUser }
            newUserInfo.error = error.message;
            newUserInfo.success = false
            setLoggedInUser(newUserInfo)
            console.log(false);

            setShowOTPBtn(true)
        

        });
    }


    const handleBlur = (event) => {


        let newUser = { ...loginInfo }
        newUser[event.target.name] = event.target.value
        setLoginInfo(newUser)


    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (newUser && loginInfo.password && loginInfo.password === loginInfo.confirmPassword) {
            firebase.auth().createUserWithEmailAndPassword(loginInfo.email, loginInfo.password)
                .then((userCredential) => {
                    var { displayName, email } = userCredential.user;
                    let newUserInfo = { name: displayName, email: email }
                    newUserInfo.error = ''
                    newUserInfo.success = true
                    setLoggedInUser(newUserInfo)
                    storeAuthToken();
                    history.replace(from);

                })
                .catch((error) => {

                    let newUserInfo = { ...loggedInUser }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false
                    setLoggedInUser(newUserInfo)
                });
        }
        if (newUser && loginInfo.password !== loginInfo.confirmPassword) {
            let newUserInfo = { ...loggedInUser }
            newUserInfo.error = "pass word not matched";

            setLoggedInUser(newUserInfo)


        }
        if (!newUser && loginInfo.email && loginInfo.password) {
            firebase.auth().signInWithEmailAndPassword(loginInfo.email, loginInfo.password)
                .then((userCredential) => {
                    var { displayName, email } = userCredential.user;
                    let newUserInfo = { name: displayName, email: email }
                    newUserInfo.error = ''
                    newUserInfo.success = true
                    setLoggedInUser(newUserInfo)
                    storeAuthToken();
                    history.replace(from);

                })
                .catch((error) => {
                    let newUserInfo = { ...loggedInUser }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false
                    setLoggedInUser(newUserInfo)
                });
        }
    }


    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;

                const signedInUser = { name: displayName, email: email, img: photoURL };
                setLoggedInUser(signedInUser);

                storeAuthToken();
                history.replace(from);
            })
            .catch((error) => {
                let newUserInfo = { ...loggedInUser }
                newUserInfo.error = error.message;
                setLoggedInUser(newUserInfo);

            });


    };

    return (



        <div className="login-page container ">



            <div className="d-flex justify-content-center my-5  ">
                <div style={{ borderRadius: "20px" }} className=" login-container bg-light p-5">
                    <form onSubmit={handleSubmit}>

                        {newUser && <div class=" mb-1">
                            <label for="inputemail3" class="col-sm-2 col-form-label">
                                Name
                            </label>

                            <input class="form-control" type="text" />

                        </div>}


                        <div class=" mb-1">
                            <label for="inputemail3" class="col-sm-2 col-form-label">
                                email
                            </label>

                            <input class="form-control" type="text" required onBlur={handleBlur} placeholder="type your email" name="email" id="" />

                        </div>
                        <div class="mb-1">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">
                                Password
                            </label>

                            <input class="form-control" id="inputPassword3" type="password" required onBlur={handleBlur} name="password" id="" placeholder="type your password" />

                        </div>

                        {newUser && <div class=" mb-1">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">
                                Confirm password
                            </label>

                            <input class="form-control" id="inputPassword3" type="password" required onBlur={handleBlur} name="confirmPassword" id="" placeholder="confirm password" />

                        </div>}
                        {newUser ? <p style={{ cursor: "pointer" }}>Already have an account ? <span onClick={() => setNewUser(!newUser)} name="newUser" id="newUser" class="text-primary">Log in</span></p>
                            : <p style={{ cursor: "pointer" }}>Are you new user? <span onClick={() => setNewUser(!newUser)} name="newUser" id="newUser" class="text-primary">create account</span></p>
                        }
                        <div className=" justify-content-center  d-flex mb-1">
                            <button className="w-75 btn btn-secondary" type="submit" variant="primary" size="md" block>
                                {newUser ? "sign up" : "Log in"}
                            </button>
                        </div>

                    </form>


                    {!showOTPBtn &&
                        <form onSubmit={handlePhoneSignIn}>
                            <div id="sign-in-button"></div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Phone NUmber</label>
                                <input type="number" name="mobileNumber" placeholder="enter phone number" class="form-control" id="exampleInputPassword1"></input>
                            </div>
                            <div className="justify-content-center d-flex">


                                <button type="submit" class="btn btn-primary">Submit Number</button>
                            </div>
                        </form>

                    }

                    {showOTPBtn &&
                        <form onSubmit={handleOTPSubmit}>

                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">OTPNumber</label>
                                <input type="number" name="OTPNumber" class="form-control" id="exampleInputPassword1"></input>
                            </div>
                            <div className="justify-content-center d-flex">
                                <button type="submit" class="btn btn-primary">Submit OTP</button>
                                <p className="text-info  btn" onClick={()=>setShowOTPBtn(false)} style={{marginLeft:"20px"}}>try again</p>
                            </div>
                        </form>}
                    <div className="justify-content-center d-flex">
                        <button className="btn btn-secondary mt-3" onClick={handleGoogleSignIn}>sign in with google</button>
                    </div>
                    <p className="text-warning mt-2">{loggedInUser.error}</p>

                </div>
            </div>

        </div>

    );
};



export default (Login);
