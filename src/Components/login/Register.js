import React, { useState } from "react"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import "./design.css"
import {createUserWithEmailAndPassword,onAuthStateChanged, signOut} from "firebase/auth"
import { auth } from "../../firebase"
import { async } from "@firebase/util"
const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setCpassword] = useState("")
  const [user,setUser] = useState({})
  onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)
  })
  const register =async()=>{
    try{
      const user= await createUserWithEmailAndPassword(auth, email,password)
      console.log(user)
    }catch(err){
      console.log(err.message);
    }
  };
  const logout=async()=>{
    await signOut(auth);
  };
  const [recValue, setRecValue] = useState([])
  // const submitForm = (e) => {
  //   e.preventDefault()
  //   const newValue = { name: name, email: email, password: password, cpassword: cpassword }

  //   setRecValue([...recValue, newValue])
  //   console.log(newValue)

  //   setName("")
  //   setEmail("")
  //   setPassword("")
  //   setCpassword("")
  // }
  return (
    <>
      <HeadTitle />
      <section className='forms top'>
        <div className='container'>
          <div className='sign-box'>
            <p>Don't have an account? Create your account, it takes less than a minute.</p>
            <form action=''>
              <input type='text' name='name'  onChange={(e) => setName(e.target.value)} placeholder='Name' required />
              <input type='email' name='email'  onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
              <input type='password' name='password'  onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
              {/* <input type='password' name='cpassword'  onChange={(e) => setCpassword(e.target.value)} placeholder='Confirm Password' required /> */}

              <button onClick={register} type='submit' className='primary-btn'>
                Create an Account
              </button>
            </form>
            <button onClick={logout} type='submit' className='primary-btn'>
                signOut
              </button>
              <h4>
              {user?.email}
            </h4>
          </div>
        </div>
      </section>

      { <section className='show-data'>
        {recValue.map((cureentValue) => {
          return (
            <>
              <div className='sign-box'>
                <h1>Created an Account Successfully</h1> 
                <h3>
                  Name : <p>{cureentValue.name}</p>
                </h3>
                <h3>
                  Email : <p>{cureentValue.email}</p>
                </h3>
                <h3>
                  Password : <p>{cureentValue.password}</p>
                </h3>
                <h3>
                  Confirm Password : <p>{cureentValue.cpassword}</p>
                </h3>
              </div>
            </>
          )
        })}
      </section> }
    </>
  )
}

export default Register
