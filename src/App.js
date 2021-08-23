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
          <Route path="/employeeForm">
    <JobSeekerForm></JobSeekerForm>
          </Route> 
        </Switch>
    </Router>
    </UserContext.Provider>

  );
}

export default App;
