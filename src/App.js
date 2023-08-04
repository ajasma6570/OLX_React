import React ,{useContext, useEffect} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { AuthContext, FirebaseContext } from './store/Context';
import Home from './Pages/Home';
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import './App.css';

/**
 * ?  =====Import Components=====
 */


function App() {
const {setUser}=useContext(AuthContext)
const {Firebase}=useContext(FirebaseContext)
useEffect(()=>{
      Firebase.auth().onAuthStateChanged((user)=>{
        setUser(user)
      })
})
  return (
    <div>
      <Router >
        <Route exact path='/' component={Home} />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login}/>
        </Router>
    </div>
  );
  }
 
export default App;
