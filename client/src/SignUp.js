import React, { useState } from "react";
import HomeButton from "./HomeButton";

function SignUp({setUser}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        const username = e.target[0].value
        const password = e.target[1].value
            console.log(username, password)
            // invoke users#create
            
    }

    return (
        <div>
            <HomeButton/>
            <form onSubmit={handleSubmit}>
                <h3>Sign up</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input type="email" 
                    className="form-control" 
                    placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" 
                    className="form-control" 
                    placeholder="Enter password" />
                </div>
                <button variant="primary" >Sign up</button>
            </form>
        </div>
    )
}

export default SignUp