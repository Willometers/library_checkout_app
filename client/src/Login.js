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
                <h3>Log In</h3>
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
                <button variant="primary" >Log in</button>
            </form>
        </div>
    );

}

export default Login