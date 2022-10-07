import React from 'react'
import { useState } from "react"
import {useNavigate} from 'react-router-dom'

function Home() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();
  
  const routeChange = () => {
    let path = '/Register';
    navigate(path);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        password: password
      }),
    })
    .then(res => res.json())
    .then((user) => console.log(user))
    navigate('/Profile')
  }

  return (
    <section class="h-100 gradient-form" background-color="#eee;">
      <div class="container py-5 h-100" >
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-10">
            <div class="card rounded-3 text-black">
              <div class="row g-0">
                <div class="col-lg-6" style={{backgroundColor: "#529F8C" }}>
                  <div class="card-body p-md-5 mx-md-4" style={{backgroundColor: "#529F8C", color: "#F6C6BF" }}>
                    <div class="text-center">
                        <img src="https://i.imgur.com/6hzdhTQ.jpg" width="250px" alt="logo"/>
                         </div>
                          <form onSubmit={handleSubmit}>
                            <p>Please login to your account</p>
                              <div class="form-outline mb-4">
                                <input type="name" id="form2Example11" class="form-control"
                                  placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                                    <label class="form-label" for="form2Example11" style={{color: "#F6C6BF"}}>Username</label>
                                    </div>
                                <div class="form-outline mb-4">
                                      <input type="password" id="form2Example22" class="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                                      <label class="form-label" for="form2Example22" style={{color: "#F6C6BF"}} >Password</label>
                                      </div>
                                  <div class="text-center pt-1 mb-5 pb-1">
                                      <button class="btn btn-default" style={{backgroundColor: "#F6C6BF", color: "#529F8C" }} type="submit" >Log In</button>
                                      </div>
                                    <div class="d-flex align-items-center justify-content-center pb-4">
                                      <button onClick={routeChange} type="button" class="btn btn-default" style={{backgroundColor: "#F6C6BF", color: "#529F8C" }} >Create Account</button>
                                      </div>
                          </form>
                    </div>
                      <div className="d-grid gap-2 mt-3">
                        </div>
                          </div>
                            <div class="col-lg-6 d-flex align-items-center gradient-custom-2" style={{backgroundColor: "#F6C6BF"}}>
                              <div class="text-black px-3 py-4 p-md-5 mx-md-4">
                                <h4 class="mb-4" style={{textAlignVertical: "center",textAlign: "center"}} >Welcome to Reel Connections</h4>
                                  <p class="small mb-0" style={{textAlignVertical: "center",textAlign: "center"}} >Here at Reel Connections, we're here to help you find a partner to watch movies with!
                                  If you need someone to snuggle up with during those cozy Hallmark Christmas movies, or someone to share in your
                                  pain as Michael Myers keeps finding ways to come back and kill some more, check us out! We're here to help
                                  you find your forever movie watching soulmate!  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;