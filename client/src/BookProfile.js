import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router"

import HomeButton from "./HomeButton"

const BookProfile = () => {
    const { id } = useParams()
    const [ book, setBook ] = useState([])
    // const history = useHistory()

    useEffect(() => {
        fetch(`http://localhost:3000/books/${id}`)
        .then(res => res.json())
        .then(setBook)
    }, [])

    // const handleHome = (e) => {
    //     e.preventDefault()
    //     history.push(``)
    // }

    return (
        <div>
            < HomeButton/>
            <form >
                <h1>{book.title}</h1>
                <h2>{book.author}</h2>
                <p>{book.description}</p>
                <p>{book.genre}</p>
                <button>Checkout</button>
                <br/>
            </form>

        </div>
    )
}

export default BookProfile