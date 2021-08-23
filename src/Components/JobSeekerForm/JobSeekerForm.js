import React from 'react';
import { useForm, Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import axios from 'axios';
const JobSeekerForm = () => {

    const { register, handleSubmit, watch, control, formState: { errors } } = useForm();
    const loading = toast.loading('Please wait...!');
    const onSubmit = data =>{
        console.log(data);
        // fetch('http://localhost:5000/addEmployee', {
            axios.post("http://localhost:5000/addEmployee", data)
            .then(res => {
              toast.dismiss(loading);
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
    
   


    return (
        <div class="container">
            <form class="row g-3" onSubmit={handleSubmit(onSubmit)}>
                {/* <Controller
            as={
              <ReactDatePicker
                dateFormat="d MMM yyyy"
                minDate={new Date()}
                selected={
                  dateReceived?.value ? new Date(dateReceived.value) : null
                }
                showTimeSelect={false}
                todayButton="Today"
                customInput={<StyledInput errors={errors} />}
                dropdownMode="select"
                isClearable
                placeholderText="Click to select time"
                shouldCloseOnSelect
              />
            }
            errors={errors}
            control={control}
            register={register({ required: false })}
            name="expiryAt"
            onChange={([selected]) => {
              return { value: selected };
            }}
            required
          /> */}


                <div class="col-md-6">
                    <label for="validationDefault01" class="form-label">First name</label>
                    <input type="text" class="form-control" id="validationDefault01" {...register("FirstName", { required: false })} />
                </div>
                <div class="col-md-6">
                    <label for="validationDefault02" class="form-label">Last name</label>
                    <input type="text" class="form-control" id="validationDefault02" value="Otto"></input>
                </div>
                <div class="col-md-6">
                    <label for="validationDefault04" class="form-label">Your work function</label>

                    <select class="form-select" id="validationDefault04" {...register("workFunction")}>
                        <option selected>Open this select menu</option>
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
                    <input type="text" class="form-control" id="validationDefault02" value="Otto"></input>
                </div>
                <div class="col-md-6">
                    <label for="validationDefault04" class="form-label">location</label>

                    <select class="form-select" id="validationDefault04" {...register("workFunction")}>
                        <option selected>Open this select menu</option>
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
                    <input type="text" class="form-control" {...register("LastOrCurrentOrganization", { required: false })} />

                </div>
                <div class="d-flex">
                    <div class="col-md-3 mx-3">
                        <label for="validationDefault02" class="form-label">Top 3 skills</label>
                        <input type="text" class="form-control" {...register("skill-1", { required: false })} />

                    </div>
                    <div class="col-md-3 mx-3">
                        <label for="validationDefault02" class="form-label">.</label>
                        <input type="text" class="form-control" {...register("skill-2", { required: false })} />

                    </div>
                    <div class="col-md-3 mx-3">
                        <label for="validationDefault02" class="form-label">.</label>
                        <input type="text" class="form-control" {...register("skill-3", { required: false })} />
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="validationDefault02" class="form-label">Expected Compensation</label>
                    <input type="number" class="form-control" {...register("Compensation", { required: false })} />

                </div>
                <div class="col-md-6">
                    <label for="validationDefault02" class="form-label">When can you start</label>
                    <input type="number" class="form-control" {...register("statDate", { required: false })} />

                </div>

                <div class="col-md-6 align-self-center pt-4">
                    <div class="form-check form-check-inline">

                        <input class="form-check-input" type="radio" id="inlineRadio1" {...register("inlineRadioOptions", { required: false })} value="full time"></input>
                        <label class="form-check-label" for="inlineRadio1">full time</label>
                    </div>
                    <div class="form-check form-check-inline">

                        <input class="form-check-input" type="radio" id="inlineRadio2" {...register("inlineRadioOptions", { required: false })} value="Part time"></input>
                        <label class="form-check-label" for="inlineRadio2">Part time</label>
                    </div>
                    <div class="form-check form-check-inline">

                        <input class="form-check-input" type="radio" id="inlineRadio3" {...register("inlineRadioOptions", { required: false })} value="weekend work" ></input>
                        <label class="form-check-label" for="inlineRadio3">weekend work</label>
                    </div>
                    <div class="form-check form-check-inline">

                        <input class="form-check-input" type="radio" id="inlineRadio4" {...register("inlineRadioOptions", { required: false })} value="freelance" ></input>
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

                            <input class="form-check-input" type="radio" id="inlineRadio2" {...register("WillReturn", { required: false })} value="No"></input>
                            <label class="form-check-label" for="inlineRadio2">No</label>
                        </div>
                    </div>

                </div>
                <div class="col-md-6">
                    <label for="validationDefault02" class="form-label">AGE</label>
                    <input type="number" class="form-control" {...register("age", { required: false })} />

                </div>
                <div class="col-md-6">
                    <label for="validationDefault04" class="form-label">Highest Academic Qualification </label>

                    <select class="form-select" id="validationDefault04" {...register("Qualification")}>
                        <option selected>Open this select menu</option>
                        <option value="Masters">Masters</option>
                        <option value="Bachelors">Bachelors</option>
                        <option value=" Senior Secondary"> Senior Secondary</option>
                        <option value=" Senior Secondary"> Senior Secondary</option>
                        <option value="school drop out">school drop out</option>
                        <option value="college drop out">college drop out</option>


                    </select>

                </div>
                <div class="col-md-6">
                    <input type="file" class="form-control" id="inputGroupFile02" {...register("Resume", { required: false })}></input>


                </div>


                <div class="col-md-6">
                    <label for="validationDefault03" class="form-label">City</label>
                    <input type="text" class="form-control"></input>
                </div>
                <div class="col-md-6">
                    <label for="validationDefault04" class="form-label">State</label>

                    <select class="form-select" id="validationDefault04" {...register("workFunction")}>
                        <option selected>Open this select menu</option>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>



                </div>
                <div class="col-md-6">
                    <label for="validationDefault05" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="validationDefault05"></input>
                </div>



                <div class="col-md-12  text-center">
                    <input class="bg-danger btn text-light px-4" type="submit" />
                </div>


            </form>
        </div>
    );
};

export default JobSeekerForm;