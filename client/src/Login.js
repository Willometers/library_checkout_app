import React from "react";
import HomeButton from "./HomeButton";
// interfaces with sessions#create

const Login = () => {

    function handleSubmit(e) {
        e.preventDefault()
        console.log("Submitted")
        let email = e.target[0].value
        let password = e.target[1].value
        fetch("/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
              email, 
              password 
            }),
        }).then((r) => {
            console.log(r)
            // invoke sessions#create with user_id
        });
      }
      
    return (
        <div>
            <HomeButton/>
        <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>
        <div className="form-group">
            <label>Email address</label>
            <input type="email" 
            className="form-control" 
            placeholder="Enter email" />
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" 
            className="form-control" 
            placeholder="Enter password" />
        </div>
        <button variant="primary" >Login</button>
    </form>
    </div>
    );


}

export default Login
