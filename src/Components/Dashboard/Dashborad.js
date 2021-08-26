import React from 'react';

import { useState,useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { UserContext } from '../../App';
import Address from '../Address/Address';
import JobApplication from '../JobApplication/JobApplication';
import JobExperience from '../JobExpericence/JobExperience';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import Skill from '../Skill/Skill';
import "./Dashboard.css"
import ApplyJob from '../ApplyJob/ApplyJob';

const Dashborad = () => {

    const [users, setUsers] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   
    useEffect(() => {
        fetch("https://still-brook-02175.herokuapp.com/jobseekers")
            .then(res => res.json())
            .then(data => {
                const userWithEmail = data.find(user => user.email === loggedInUser.email)
                const userWithPhone = data.find(user => user.PhoneNumber === loggedInUser.PhoneNumber)
              
          if(userWithEmail){
            setUsers(userWithEmail)
   
          }
          else if(userWithPhone){
            setUsers(userWithPhone)
   
          }
    

            })

    }, [])

    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Navbar></Navbar>
            <Row className="dashboard-container" >
                <Col className="dashboard-nav" sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">My Profile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Address</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Job Experience</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="4th">Skills</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="5th">Job applications</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="6th">Apply</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={8}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Profile users={users}></Profile>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <Address users={users}></Address>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <JobExperience users={users}></JobExperience>
                        </Tab.Pane>
                        <Tab.Pane eventKey="4th">
                        <Skill users={users}></Skill>
                        </Tab.Pane>
                        <Tab.Pane eventKey="5th">
                        <JobApplication users={users}></JobApplication>
                        </Tab.Pane>
                        <Tab.Pane eventKey="6th">
                    <ApplyJob users={users}></ApplyJob>
                        </Tab.Pane>
                        
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
};

export default Dashborad;