import React,{createContext, useReducer} from 'react';
import './App.css';
import Home from './Component/Home';
import StudentLists from './Component/StudentLists';
import AddStudent from './Component/AddStudent';
import EditStudent from './Component/EditStudent';
import NavBar from './Component/NavBar';
import Login from './pages/Login/Login';
import SignUp from './pages/Register/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {reducer, initialState} from './reducer/userReducer';

export const UserContext = createContext()

const Routing = () =>{
  return (
      <Switch>

        <Route exact path="/"><StudentLists/></Route>
        <Route exact path="/login"><Login/></Route>
        <Route exact path="/register"><SignUp/></Route>
        <Route exact path="/add"><AddStudent/></Route>
        <Route exact path="/edit/:id"><EditStudent/></Route>
        <Route exact path="/logout"><Home/></Route>
     </Switch>

  )
}

function App() {
  const [state,dispatch] = useReducer(reducer, initialState)
  return (
        <>

        <UserContext.Provider value={{state, dispatch}}>
         <Router>
            <NavBar />
            <Routing/>

         </Router>
            
        </UserContext.Provider>
      </>
  );
}

export default App;
