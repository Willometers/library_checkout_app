import React from "react";
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

function NavBar() {
    const history = useHistory()
    
    useEffect(() => {
        const loggedIn = sessionStorage.getItem("loggedIn")

        if (!loggedIn) {
          console.log("no session")
          history.push('/login')
          }
      })

      return (
        <div>
            {/* <Link to="/signup">Signup</Link> */}
        </div>
      )
}

export default NavBar
