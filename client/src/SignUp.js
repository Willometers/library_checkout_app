import React from "react";
import {useHistory} from 'react-router-dom'
import { useState } from 'react'

function SignUp() {
    const history = useHistory()
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
          .then(history.push('/books'))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
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