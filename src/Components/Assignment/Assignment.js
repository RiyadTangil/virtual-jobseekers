
import axios from 'axios';
import { useState } from 'react';
import StudentInfo from '../StudentInfo/StudentInfo';
const Assignment = () => {
    const [studentInfo, setStudentInfo] = useState(null)
    const [user, setUser] = useState(null)
    const handlePhoneSignIn = (e) => {
        e.preventDefault();
        let phoneNumber = e.target.phoneNumber.value
        console.log(phoneNumber);
        axios.post("http://localhost:5000/addUser", { phoneNumber })
            .then(res => {
                setUser(res.data)
            })
    }
    const handleSubjectByStudent = (e) => {
        e.preventDefault();
        let studentName = e.target.studentName.value
        console.log(studentName);
        fetch('http://localhost:5000/subjectByStudent?search=' + studentName)
        .then(res => res.json())
        .then(data => {
            setStudentInfo(data[0])
            console.log(data[0]);
        })
               
    }


const handleManyUpdate = ()=>{

axios.post("http://localhost:5000/insertAndUpdate", {name:"riyad"})

            .then(res => {
                // setUser(res.data)
            })
}


    return (
        <div class="container">
            <div>
                <form onSubmit={handlePhoneSignIn}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">phone number</label>
                        <input type="number" class="form-control" name="phoneNumber" id="exampleInputEmail1" aria-describedby="emailHelp"></input>

                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <p class="text-warning">{user}</p>

            </div>
            <div class="my-5">
                <form onSubmit={handleSubjectByStudent}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Enter the student name to see the subject</label>
                        <input type="text" class="form-control" name="studentName" id="exampleInputEmail1" aria-describedby="emailHelp"></input>

                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
{studentInfo && 
             <div>
             {<StudentInfo studentInfo={studentInfo}></StudentInfo>}
             </div>
}
            </div>
        <div onClick={()=>handleManyUpdate()} className="btn btn-primary">insertMany</div>
        </div>
    );
};

export default Assignment;