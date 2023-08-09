import React, { useState,useContext } from 'react';
import {FirebaseContext} from '../../store/Context'
import {useHistory,Link} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const history=useHistory();
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {Firebase}=useContext(FirebaseContext)
  const handleLogin=(e)=>{
      e.preventDefault();
    Firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push('/')
    }).catch((error)=>{
      alert(error.message)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt='Logo'></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            id="fname"
            name="email"
           
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            type="password"
            id="lname"
            name="password"
           
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to={'/signup'}>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
