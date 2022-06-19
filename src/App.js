import { useState } from 'react'
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth'
import './App.css'
import {auth} from './firebase-config'

function App() {

  const [RegisterUsername, setRegisterUsername] = useState("")
  const [RegisterPassword, setRegisterPassword] = useState("")
  const [LoginUsername, setLoginUsername] = useState("")
  const [LoginPassword, setLoginPassword] = useState("")

  const [user, setUser] = useState("");

  onAuthStateChanged(auth, (currentUser)=>{
    setUser(currentUser)
  });

  const register = async () =>{
    try{
      const user = await createUserWithEmailAndPassword(auth, RegisterUsername, RegisterPassword)
      console.log(user)
    }
    catch(error){
      console.log(error.message)
    }
  }

  const login = async () => {
    try{
      const user = await signInWithEmailAndPassword(auth, LoginUsername, LoginPassword)
      console.log(user)
    }
    catch(error){
      console.log(error.message)
    }
  }

  const logout = async () =>{
    await signOut(auth)
  }
  return (
    <div className="App">
      <div className="signup">
        <h3>Register User</h3>
        Username:
        <input type="text" placeholder="username" onChange={(event)=>{setRegisterUsername(event.target.value)}}/>

        Password:
        <input type="password" placeholder="password" onChange={(event)=>{setRegisterPassword(event.target.value)}}/>

        <button onClick={register}>Register</button>
      </div>

      <div className="login">
        <h3>Login</h3>
        Username:
        <input type="text" placeholder="username" onChange={(event)=>{setLoginUsername(event.target.value)}}/>

        Password:
        <input type="password" placeholder="password" onChange={(event)=>{setLoginPassword(event.target.value)}}/>

        <button onClick={login}>Login</button>
        <h4>User Logged in:</h4>
        {user?.email}
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default App;
