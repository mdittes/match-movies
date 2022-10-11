import React, {useState} from 'react'
import '../styled/Login.css'
import {useNavigate} from 'react-router-dom'

function Login(  ) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const navigate = useNavigate();



    function handleSubmit(e) {
      e.preventDefault();
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password
        }),
      })
      .then(res => res.json())
      .then((user) => {
        console.log(user)
        navigate('/Profile')
      })
      
    }
  
      return (
        <div className="Auth-form-container">
          <form onSubmit={handleSubmit} className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
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
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
              <button class="btn btn-default" style={{backgroundColor: "#529F8C", color: "#F6C6BF" }} type="submit"  >Submit</button>
              </div>
            </div>
          </form>
        </div>
      )
}

export default Login