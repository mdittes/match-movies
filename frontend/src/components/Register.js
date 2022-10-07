import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styled/Register.css';

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username,
                password,
                email,
                profile_picture: profilePicture
            })
        })
        .then((r) => r.json())
        .then((data) => {
            if (data.errors) {
                setErrors(data.errors)
            } else {
                localStorage.setItem("token", data.token);
                navigate("/profile");
            }
        });
    }
    
    return (
        <div className="Auth-form-container">
          <form onSubmit={handleSubmit} className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Register</h3>
              <div className="form-group mt-3">
                <label>Email Address</label>
                <input
                    type="email"
                    className="form-control mt-1"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                />
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
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                />
              </div>
              <div className="form-group mt-3">
                <label>Profile Picture</label>
                <input
                    type="text"
                    className="form-control mt-1"
                    onChange={(e) => setProfilePicture(e.target.value)}
                    placeholder="Enter profile picture URL"
                />
                </div>
              <div className="d-grid gap-2 mt-3">
              <button class="btn btn-default" style={{backgroundColor: "#529F8C", color: "#F6C6BF" }} type="submit"  >Submit</button>
              </div>
            </div>
          </form>
          {errors.map((error) => (
              <p style={{color: "red"}} key={error}>{error}</p>
            ))}
        </div>
    );
}

export default Register;
