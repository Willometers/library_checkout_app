import React from "react"
import { useState } from "react"
import { useParams } from "react-router"
import { useEffect } from "react"

const CheckoutButton = () => {
    const { id } = useParams()
    const [ user, setUser ] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/users`)
        .then(res => res.json())
        .then(setUser)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("checked out")
        const reader = user[0].id
        fetch("/checkouts/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({user_id: reader, book_id: id})
        })
        .then((r) => r.json())
        .then(console.log({user_id: reader, book_id: id}))
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