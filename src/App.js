
import './App.css';

import { Toaster } from 'react-hot-toast';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { createContext, useState } from 'react';
import Home from './Components/Home/Home';

export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Toaster />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>





        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
