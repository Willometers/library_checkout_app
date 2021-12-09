import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router"
import HomeButton from "./HomeButton"
import CheckoutButton from "./CheckoutButton"

const BookProfile = () => {
    const { id } = useParams()
    const [ book, setBook ] = useState([])
    // const user_id = sessions[user_id]
    // const history = useHistory()

    useEffect(() => {
        fetch(`http://localhost:3000/books/${id}`)
        .then(res => res.json())
        .then(setBook)
    }, [])
    
    return (
        <div>
            < HomeButton/>
            <div >
                <h1>{book.title}</h1>
                <h2>{book.author}</h2>
                <p>Description: {book.description}</p>
                <p>Genre: {book.genre}</p>
            < CheckoutButton />
                <br/>
            </div>
        </div>
    )
}

export default BookProfile