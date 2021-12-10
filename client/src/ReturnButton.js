import React from "react"
// import { useState } from "react"

const ReturnButton = ({}) => {
    // const [ data, setData ] = useState([])

    const handleSubmit = (e) => {
        // e.preventDefault()
        console.log()
        fetch(`http://localhost:3000/checkouts`, {
            method: 'DELETE'
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button>Return Books</button>
            </form>
        </div>
    )

}

export default ReturnButton