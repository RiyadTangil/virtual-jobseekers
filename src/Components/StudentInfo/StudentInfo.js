import React from 'react';

const StudentInfo = ({ studentInfo }) => {
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">CustomerID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Subjects</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{studentInfo.name}</td>
                        <td>{studentInfo.subjectcs.first},{studentInfo.subjectcs.second},{studentInfo.subjectcs.third}</td>
                     
                    
                      
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default StudentInfo;