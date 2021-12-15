import React from "react";
import {useHistory} from 'react-router-dom'
import { useState } from 'react'
// interfaces with sessions#create

function Login() {
    const history = useHistory()
    const [username, setUsername] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.value)
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username }),
          })

            .then((r) => r.json())
            .then((user) => { 
                if (!user.error) {
                    sessionStorage.setItem("loggedIn", true)
                    history.push('/books')
                    }
                else {
                    history.push('/signup')
                    }
                })
            }

               
    return (
        <div>
             <h3>Log In</h3>  
             <form onSubmit={handleSubmit}>         
            <input
                placeholder="username"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br/>
                <button variant="primary">Log in</button>
            </form>
        </div>
    );

}

export default Login