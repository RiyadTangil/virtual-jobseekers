import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Toaster } from 'react-hot-toast';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { createContext ,useState} from 'react';
import Login from './Components/Login/Login/Login';
import JobSeekerForm from './Components/JobSeekerForm/JobSeekerForm';
import StripePayment from './Components/StripePayment/StripePayment';
import Payment from './Components/Payment/Payment';
import Dashborad from './Components/Dashboard/Dashborad';
import PrivetRoute from './Components/Login/PrivetRoute/PrivetRoute';
import JobSeekers from './Components/JobSeekers/JobSeekers';
import DashboardManager from './Components/DashboardManager/DashboardManager';

export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (

<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
  <Toaster/>
    <Router>
         <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
       
          <Route path="/login">
      <Login></Login>
          </Route> 
          <PrivetRoute path="/employeeForm">
    <JobSeekerForm></JobSeekerForm>
          </PrivetRoute> 
          <Route path="/payment">
    <Payment></Payment>
          </Route> 
          <PrivetRoute path="/dashboard">
          <DashboardManager></DashboardManager>
          </PrivetRoute> 
          <PrivetRoute path="/dashboardManager">
 <DashboardManager></DashboardManager>
          </PrivetRoute> 
        </Switch>
    </Router>
    </UserContext.Provider>

  );
}

export default App;
