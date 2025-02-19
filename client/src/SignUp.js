import React from "react";
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'

function SignUp() {
    const history = useNavigate()
    const [username, setUsername] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        console.log(username)
        e.preventDefault();
        console.log(e.target.value)
        fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username }),
          })
          .then(history('/books'))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h5 style={{color:'red'}}>User Not Found</h5>
                <h3>Sign up</h3>
                <div>
                    <input
                    placeholder="username"
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <button variant="primary" >Sign up</button>
            </form>
        </div>
    )
}

export default SignUp