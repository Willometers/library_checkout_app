import React from "react"
import { useHistory } from 'react-router-dom'

const CheckoutButton = () => {


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("checked out")
        // fetch create checkout with sessions[:user_id] and :book_id
        // fetch("/checkouts", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body:JSON.stringify()
        // })
        // .then((r) => r.json())
        // .then(console.log())
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button>Checkout</button>
            </form>
        </div>
    )

}

export default CheckoutButton