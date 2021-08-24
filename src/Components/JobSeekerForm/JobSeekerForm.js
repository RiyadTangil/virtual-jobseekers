import React, { useState, useContext, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import axios from 'axios';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripePayment from '../StripePayment/StripePayment';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Navbar from '../Navbar/Navbar';
const JobSeekerForm = () => {
    const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
    const [imageURL, setIMageURL] = useState(null);
    const [stripeID, setStripeId] = useState(null)
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)



    useEffect(() => {
        fetch("https://still-brook-02175.herokuapp.com/jobseekers")
            .then(res => res.json())
            .then(data => {
                const userWithEmail = data.find(user => user.email === loggedInUser.email)
                const userWithPhone = data.find(user => user.PhoneNumber === loggedInUser.PhoneNumber)
                console.log(userWithEmail, userWithPhone);
                if (userWithEmail || userWithPhone) {
                    console.log(true);
                    history.replace({ pathname: "/dashboard" });
                }



            })

    }, [])








    const { register, handleSubmit, watch, control, formState: { errors } } = useForm();

    const onSubmit = data => {
        const loading = toast.loading('Please wait...!');

        let newData = { ...data, "imageURL": imageURL, "stripeID": stripeID }


        axios.post("https://still-brook-02175.herokuapp.com/addEmployee", newData)
            .then(res => {
                toast.dismiss(loading);
                history.replace({ pathname: "/dashboard" });
                if (res.data) {
                    return swal("Payment successful", "Your booking and payment has been successful.", "success");

                }
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            })
            .catch(error => {
                toast.dismiss(loading);
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            })

    }
    const handleImageUpload = event => {
        const loading = toast.loading('image is uploading. Please wait...!');
        const imageData = new FormData();

        imageData.set('key', '8ece3963cdc5195811f654de65d90034');
        imageData.append('image', event.target.files[0]);
        //axios copied code form git hub search results of google
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
                toast.dismiss(loading);
                toast.success('Successfully uploaded!')
            })
            .catch(function (error) {
                toast.dismiss(loading);
            });

    }


    return (
        <div>
            <Navbar></Navbar>
            <div class="container my-4 shadow-lg   pb-5">

                <form class="row g-3" onSubmit={handleSubmit(onSubmit)}>
                    <h5 class="text-warning">complete the form as a new Job seeker</h5>
                    <div class="col-md-6">
                        <label for="validationDefault01" class="form-label">First name</label>
                        <input type="text" class="form-control" required id="validationDefault01" {...register("FirstName", { required: false })} />
                    </div>
                    <div class="col-md-6">
                        <label for="validationDefault02" class="form-label">Last name</label>
                        <input type="text" class="form-control" required id="validationDefault01" {...register("LastName", { required: false })} />


                    </div>
                    <div class="col-md-6">
                        <label for="validationDefault04" class="form-label">Your work function</label>

                        <select class="form-select" id="validationDefault04" {...register("workFunction")}>

                            <option value="HR"></option>
                            <option value="HR">HR</option>
                            <option value="Operations">Operations</option>
                            <option value="Technology">Technology</option>
                            <option value="Sales ">Sales </option>
                            <option value="Driver">Driver</option>
                            <option value="Workforce">Workforce</option>
                            <option value="Finance">Finance</option>

                        </select>

                    </div>
                    <div class="col-md-6">
                        <label for="validationDefault02" class="form-label">experience</label>
                        <input type="text" class="form-control" required id="validationDefault02" ></input>
                    </div>
                    <div class="col-md-6">
                        <label for="validationDefault04" class="form-label">location</label>

                        <select class="form-select" id="validationDefault04" {...register("location")}>

                            <option value="Bangalore">Bangalore</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Dubai">Dubai</option>
                            <option value="Bhopal">Bhopal</option>
                            <option value="Bhagalpur">Bhagalpur</option>
                            <option value=" Bhagalpur"> Bhagalpur  </option>
                            <option value=" Japan"> Japan</option>
                            <option value=" Bhagalpur"> Bhagalpur</option>


                        </select>

                    </div>
                    <div class="col-md-6">
                        <label for="validationDefault02" class="form-label">Last/current organisation</label>
                        <input type="text" class="form-control" required {...register("LastOrCurrentOrganization", { required: false })} />

                    </div>
                    <div class="d-flex">
                        <div class="col-md-3 mx-3">
                            <label for="validationDefault02" class="form-label">Top 3 skills</label>
                            <input type="text" class="form-control" required {...register("skillOne", { required: false })} />

                        </div>
                        <div class="col-md-3 mx-3">
                            <label for="validationDefault02" class="form-label">.</label>
                            <input type="text" class="form-control" required {...register("skillTwo", { required: false })} />

                        </div>
                        <div class="col-md-3 mx-3">
                            <label for="validationDefault02" class="form-label">.</label>
                            <input type="text" class="form-control" required {...register("skillThree", { required: false })} />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="validationDefault02" class="form-label">Expected Compensation</label>
                        <input type="number" class="form-control" required {...register("Compensation", { required: false })} />

                    </div>
                    <div class="col-md-6">
                        <label for="validationDefault02" class="form-label">When can you start</label>
                        <Controller
                            name="startDate"
                            control={control}
                            defaultValue={null}
                            render={({ field }) => (
                                <DatePicker

                                    onChange={(date) => field.onChange(date)}
                                    selected={field.value}
                                    placeholderText="select a date"

                                />
                            )}></Controller>


                    </div>

                    <div class="col-md-6 align-self-center pt-4">
                        <div class="form-check form-check-inline">

                            <input class="form-check-input" type="radio" id="inlineRadio1" {...register("JobType", { required: false })} value="full time"></input>
                            <label class="form-check-label" for="inlineRadio1">full time</label>
                        </div>
                        <div class="form-check form-check-inline">

                            <input class="form-check-input" type="radio" id="inlineRadio2" {...register("JobType", { required: false })} value="Part time"></input>
                            <label class="form-check-label" for="inlineRadio2">Part time</label>
                        </div>
                        <div class="form-check form-check-inline">

                            <input class="form-check-input" type="radio" id="inlineRadio3" {...register("JobType", { required: false })} value="weekend work" ></input>
                            <label class="form-check-label" for="inlineRadio3">weekend work</label>
                        </div>
                        <div class="form-check form-check-inline">

                            <input class="form-check-input" type="radio" id="inlineRadio4" {...register("JobType", { required: false })} value="freelance" ></input>
                            <label class="form-check-label" for="inlineRadio4">freelance</label>
                        </div>
                    </div>
                    <div class="col-md-6 align-self-center pt-4">
                        <label class="form-check-label" for="inlineRadio4">Returning back after a break?</label>
                        <div>
                            <div class="form-check form-check-inline">

                                <input class="form-check-input" type="radio" id="inlineRadio1" {...register("WillReturn", { required: false })} value="Yes"></input>
                                <label class="form-check-label" for="inlineRadio1">Yes</label>
                            </div>
                            <div class="form-check form-check-inline">

                                <input class="form-check-input" type="radio" id="inlineRadio2"  {...register("WillReturn", { required: false })} value="No"></input>
                                <label class="form-check-label" for="inlineRadio2">No</label>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-6">
                        <label for="validationDefault02" class="form-label">AGE</label>
                        <input type="number" class="form-control" required {...register("age", { required: false })} />

                    </div>
                    <div class="col-md-6">
                        <label for="validationDefault04" class="form-label"> Highest Academic Qualification </label>

                        <select class="form-select" id="validationDefault04" {...register("Qualification")}>

                            <option value="Masters"></option>
                            <option value="Masters">Masters</option>
                            <option value="Bachelors">Bachelors</option>
                            <option value=" Senior Secondary"> Senior Secondary</option>
                            <option value=" Senior Secondary"> Senior Secondary</option>
                            <option value="school drop out">school drop out</option>
                            <option value="college drop out">college drop out</option>


                        </select>

                    </div>
                    <div class="col-md-6">
                        <label for="validationDefault02" class="form-label">email</label>
                        <input type="text" class="form-control" required defaultValue={loggedInUser.email} {...register("email", { required: false })} />

                    </div>
                    <div class="col-md-6">
                        <label for="validationDefault02" class="form-label">Phone Number</label>
                        <input type="number" class="form-control" required defaultValue={loggedInUser.phoneNumber} {...register("PhoneNumber", { required: false })} />

                    </div>
                    <div class="col-md-6">
                        <label for="validationDefault03" class="form-label">.</label>

                        <input type="file" onChange={handleImageUpload} class=" form-control" required id="inputGroupFile02"></input>

                    </div>
                    <div className="col-md-6">
                        <label for="validationDefault03" class="form-label">.</label>
                        <div>
                            <button type="button" class="btn btn-secondary mx-2">Enlist You CV</button>

                        </div>
                    </div>

                    <div class="col-md-12  text-center">
                        <input class="btn-success btn text-light px-4" type="submit" />
                    </div>


                </form>
                <div style={{ marginTop: '-90px' }} className="d-flex justify-content-end">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Broadcast Your CV
                    </button>
                </div>


                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <p className="text-warning">Enter you stripe payment info</p>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <Elements stripe={stripePromise}>
                                    <StripePayment setStripeId={setStripeId}></StripePayment>
                                </Elements>
                            </div>

                        </div>
                    </div>
                </div>




            </div>
        </div>
    );
};

export default JobSeekerForm;