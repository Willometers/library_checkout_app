import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import ReturnButton from "./ReturnButton"

const MyBooks = () => {
    const [ data, setData ] = useState([
        {
            id: 999,
            username: "User",
            books: [
            {
                id: 999,
                title: "No Books Checked Out",
            }]
        }
    ])

      useEffect(() => {
        fetch(`http://localhost:3000/users`)
        .then(res => res.json())
        .then(setData)
    }, [])

    return (
        <div>
            <h1>My Books:</h1>    
            <ul>
               {data[0].books.map((book) => (
                   <li key={book.id}>{book.title}</li>
               ))}
               <ReturnButton />
            </ul>
           
        </div>
    )
}

export default MyBooks