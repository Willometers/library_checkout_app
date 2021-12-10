import React from "react";
import { useState, useEffect } from 'react'
import BookTile from "./BookTile";
import HomeButton from "./HomeButton";
import MyBooks from "./MyBooks";

const BooksList = () => {

    const [books, setBooks ] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/books')
        .then(res => res.json())
        .then(setBooks)
    }, [])
    
    return (
        <div>
            <HomeButton/>
            <MyBooks/>
            <h1>Books:</h1>
            <ul>
                {books.map(book => 
                    <BookTile book={book}/>)}
            </ul>
        </div>
    );
}

export default BooksList
