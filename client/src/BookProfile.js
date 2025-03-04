import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router"
import CheckoutButton from "./CheckoutButton"
import BackButton from "./BackButton"
import UpdateButton from "./UpdateButton"
// import ReturnButton from "./ReturnButton"

const BookProfile = () => {
    const { id } = useParams()
    const [ book, setBook ] = useState([])

    useEffect(() => {
        // fetching from rails server seeded with books
        fetch(`http://localhost:3000/books/${id}`)
        .then(res => res.json())
        .then(setBook) 
    }, [])

    return (
        <div>
           <BackButton />
            <div >
                <h1>{book.title}</h1>
                <h2>{book.author}</h2>
                <p>Description: {book.description}</p>
                <p>Genre: {book.genre}</p>
            < CheckoutButton />
            < UpdateButton />
                <br/>                  
            </div>
        </div>
    )                   
}

export default BookProfile
