import React, { useState,useContext } from 'react';
import { FirebaseContext } from '../../store/Context';
import {useHistory,Link} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import './Signup.css';


export default function Signup() {
  const history=useHistory();
  const [username,setUsername] =useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const {Firebase} =useContext(FirebaseContext)
  const handleSubmit=(e)=>{
    e.preventDefault()
    Firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
        Firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:phone
        }).then(()=>{
          history.push('/login')
        })
      })
    }).catch((error) => {
      alert(error.message); // Display error message in an alert box
    });
  }
  return (
    <div>
      <div className="signupParentDiv">
    
        <img width="200px" height="200px" src={Logo} alt="Logo"></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            required
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            id="fname"
            name="email"
            required
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            type="number"
            id="lname"
            name="phone"
            required
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
            required
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to={'/login'}>Login</Link>
        
      </div>
    </div>
  );
}
