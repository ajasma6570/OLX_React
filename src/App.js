import React ,{useContext, useEffect} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { AuthContext, FirebaseContext } from './store/Context';
import Post from './store/PostContext'
import Home from './Pages/Home';
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import './App.css';

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
      <Post>
        <Router >
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login}/>
          <Route path='/create' component={Create}/>
          <Route path='/view' component={View}/>
          </Router>
        </Post>
    </div>
  );
  }
 
export default App;
