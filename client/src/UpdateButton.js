import React from "react"
import { useState } from "react"
import { useParams } from "react-router"
import { useEffect } from "react"

const CheckoutButton = () => {
    const { id } = useParams()
    const [ book, setBook ] = useState([])

    const handleSubmit = (e) => {

        e.preventDefault()
    // place holder, make an eventual POST function to add
            fetch(`http://localhost:3000/books/${id}/fanfictionify`)
            .then(res => res.json())
            .then(setBook) 
            .then(console.log("update"))
    }

    return (
        <div>
            <button onClick={handleSubmit}>Update</button>
        </div>
    )

}

export default CheckoutButton