import React from 'react'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../styled/Register.css'

function Register() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [picture, setPicture] = useState("")
  const [bio, setBio] = useState("")
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        password: password,
        image_url: picture,
        bio: bio
      }),
    })
    .then(res => res.json())
    .then((user) => console.log(user))
    navigate('/Profile')
  }

  const navigate = useNavigate();
    const routeChange = () => {
      let path = '/Login';
      navigate(path);
    }

  if (authMode === "signin") {
    return (
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign Up!</h3>
              <div className="text-center">
                Already registered?{" "}
                <span style={{cursor:'pointer'}} className="link-primary" onClick={routeChange}>
                  Sign In
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Username</label>
                <input
                  type="name"
                  value={username}
                  className="form-control mt-1"
                  placeholder="Name"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Profile Picture</label>
                <input
                  type="photo"
                  className="form-control mt-1"
                  placeholder="Upload Image URL Here"
                  onChange={(e) => setPicture(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Bio</label>
                <input
                  type="bio"
                  className="form-control mt-1"
                  placeholder="Tell us about yourself"
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
              {/* <button class="btn btn-default" style={{backgroundColor: "#529F8C", color: "#F6C6BF" }} type="submit" >Submit</button> */}
              <button class="btn btn-default" style={{backgroundColor: "#529F8C", color: "#F6C6BF" }} type="submit" onSubmit={handleSubmit} >Submit</button>
              </div>
            </div>
          </form>
        </div>
        
      )
    }
  }

  export default Register