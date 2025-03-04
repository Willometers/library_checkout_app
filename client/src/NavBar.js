import React from "react";
// import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
// import { useState } from 'react'

function NavBar() {
    const history = useNavigate()
    
    useEffect(() => {
        const loggedIn = sessionStorage.getItem("loggedIn")
        if (!loggedIn) {
          console.log(sessionStorage)
          console.log("not logged in", loggedIn)
          history('/login')
          }
        else
          history('/books')
          console.log("li", loggedIn)
          console.log("loggedIn", sessionStorage)
      })

      return (
        <div>
            {/* <Link to="/signup">Signup</Link> */}
        </div>
      )
}

export default NavBar
