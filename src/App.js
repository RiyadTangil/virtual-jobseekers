import logo from './logo.svg';
import './App.css';

import { Toaster } from 'react-hot-toast';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { createContext ,useState} from 'react';

import Assignment from './Components/Assignment/Assignment';

export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (

<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
  <Toaster/>
    <Router>
         <Switch>
          <Route exact path="/">
          <Assignment></Assignment>
          </Route>
          <Route  path="/assignment">
     <Assignment></Assignment>
          </Route>
       
   
    
         
        
        </Switch>
    </Router>
    </UserContext.Provider>

  );
}

export default App;
