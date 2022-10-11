import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function Profile() {
  const [user, setUser] = useState({})

  const navigate = useNavigate();
  

  function handleLogOut () {
    localStorage.removeItem("token")
    navigate("/home")
    setUser("")
  }

  function updateUserProfilePicture (e) {
    e.preventDefault()
    let token = localStorage.getItem("token")
    let imageString = e.target[0].value
    fetch(`http://localhost:3000/users/${user.id}`, {
      method: "PATCH",
      headers: {
        token: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image_url: imageString
      })
    })
    .then(res => res.json())
    .then((user) => {
      console.log(user)
      setUser(user)
    })
  }



        

  
  
  useEffect(() => { 
    let token = localStorage.getItem("token")
    fetch("http://localhost:3000/profile", {
      headers: {
        "token": `${token}`,
        "Content-Type": "application/json",
      },
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setUser(data)
    })
  }, [])

  

  return (
    <div class="container">
	    <div class="row">
		    <div class="col-md-6">
          <h4 class="text-center"><strong>Your Profile</strong></h4>
              <div class="profile-card-2"><img src={user.image_url} class="img img-responsive" alt=""/>
                <div class="profile-name">Username: {user.username}</div>
                  <div class="profile-username">Email Address: {user.email}</div>
                  <form onSubmit={updateUserProfilePicture}> 
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Enter profile picture URL"
                />
                  <button class="btn btn-default" style={{backgroundColor: "#529F8C", color: "#F6C6BF" }} type="submit">Update Profile Picture</button>
                  </form>
                  <button class="btn btn-primary btn-block" style={{backgroundColor: "#529F8C", color: "#F6C6BF" }} type="submit" onClick={handleLogOut}>Log Out</button>
                  </div>
                  </div>
                  </div>
                  </div>
  )
}


export default Profile