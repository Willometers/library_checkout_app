import React, { useState } from "react";
import HomeButton from "./HomeButton";

function SignUp({setUser}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault(
            console.log("signed up")
            // invoke users#create
        )
    }

    return (
        <div>
            <HomeButton/>
            <form>
            <h1>signup</h1>
            </form>
        </div>
    )
}

export default SignUp