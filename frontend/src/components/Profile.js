import React, {useState, useEffect} from 'react'

function Profile() {
  
  // useEffect(() => {
  //   fetch(`http://localhost:3000/users/${id}`)
  // }, [])

  return (
    <div>
      <h2>Profile</h2>
        <section class="h-100 gradient-form" background-color="#eee;">
          <div class="container py-5 h-100" >
            <div class="row d-flex justify-content-center align-items-center h-100">
             <div class="col-xl-10">
              <div class="card rounded-3 text-black">
                <div class="row g-0">
                  <div class="col-lg-6" style={{backgroundColor: "#529F8C" }}>
                    <div class="card-body p-md-5 mx-md-4" style={{backgroundColor: "#529F8C", color: "#F6C6BF" }}>
                      <div class="text-center"></div>
                        <img src="https://i.imgur.com/6hzdhTQ.jpg" width="250px" alt="logo"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Profile