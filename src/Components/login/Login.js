import React, { useState } from "react"
import { Link } from "react-router-dom"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import "./design.css"
import {onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { auth } from "../../firebase"


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user,setUser] = useState({})
  onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)
  })
  const [recValue, setRecValue] = useState([])
  const login =async()=>{
    try{
      const user= await signInWithEmailAndPassword(auth, email,password)
      console.log(user)
    }catch(err){
      console.log(err.message);
    }
  };
  const logout=async()=>{
    await signOut(auth);
  };
  const submitForm = (e) => {
    e.preventDefault()
    const newValue = { email: email, password: password }

    setRecValue([...recValue, newValue])
    console.log(newValue)

    setEmail("")
    setPassword("")
  }
  return (
    <>
      <HeadTitle />
      <section className='forms top'>
        <div className='container'>
          <div className='sign-box'>
            <p>Enter your e-mail and password below to log in to your account and use the benefits of our website.</p>
            <form action=''>
              <input type='text' name='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
              <input type='password' name='password'  onChange={(e) => setPassword(e.target.value)} placeholder='Password' />

              <div className='flex_space'>
                <div className='flex'>
                  <input type='checkbox' />
                  <label>Remember Me</label>
                </div>
                <div className='flex'>
                  <span>I forgot my password</span>
                </div>
              </div>

              <button onClick={login} type='submit' className='primary-btn'>
                Sign In
              </button>
              <p>
                Don't have account? <Link to='/register'>Signup!</Link>
              </p>
            </form>
            <h4>
              {user?.email}
            </h4>
            <button onClick={logout} type='submit' className='primary-btn'>
                signOut
              </button>
          </div>
        </div>
      </section>

      <section className='show-data'>
        {recValue.map((cureentValue) => {
          return (
            <>
              <div className='sign-box'>
                <h1>Sign-In Successfully</h1>
                <h3>
                  Email : <p>{cureentValue.email}</p>
                </h3>
                <h3>
                  Password : <p>{cureentValue.password}</p>
                </h3>
              </div>
            </>
          )
        })}
      </section>
    </>
  )
}

export default Login
